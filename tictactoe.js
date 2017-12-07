//declare all variables used in all functions here
var userinput_arr= [];
var compinput_arr=[];
var allinput_arr=[];
var user_turn=false;
var comp_turn = false;
var start=true;
var color1;
var color2;
var winningArray=[[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
var player1=0;
var player2=0;
var winners=0;



/* declare all functions here*/

function turns(){
	/*This function will get input from html file for first turn*/
	var submit = document.getElementById('color').value;
	if(submit === 'blue'){
		player1++;

		user_turn = true;
		get_user_spot();
	}
	else if(submit === 'red'){
		
		comp_turn=true;
		compSpot();
	}
	else{
		document.getElementById('logOut').innerHTMl= "Invalid input,red or blue";
	}
}

function get_user_spot(btn){
    /* this function gets the users click values from html file*/
    isUserWinner();
    console.log("user",userinput_arr); 
    console.log("all", allinput_arr);
    checkBoardFull();
    isUserWinner();
    if(winners>0){
    	user_turn=false;
    	comp_turn=false;
    }

    if(user_turn){
    	//isUserWinner();
    	//console.log("users turn");
    	var user_input = btn.value;
    	user_input = Number(user_input);
    	// colors the square
    	if(allinput_arr.indexOf(user_input)=== -1){
			userinput_arr.push(user_input);
			allinput_arr.push(user_input);
			if(player1>0){
    		btn.style.backgroundColor="blue";

	    	}
	    	else{
	    		btn.style.backgroundColor="red";
	    	}

		}

    	user_turn=false;
    	comp_turn=true;
    	compSpot();
    }
   
}

function compSpot(){
	/* this function gets the computers spot randomly*/
	isCompWinner();
	if(winners>0){
    	user_turn=false;
    	comp_turn=false;
    }
	
	checkBoardFull();
	var numToStr;
	var idPlaceHolder;
	if(comp_turn){
		//isCompWinner();
		console.log('comp turn');

		var comp_input = Math.floor(Math.random()*9);

		
		while(allinput_arr.indexOf(comp_input)!==-1){
			comp_input= Math.floor(Math.random()*9);
		}
		if(allinput_arr.indexOf(comp_input)===-1){
			numToStr = comp_input.toString();
			idPlaceHolder='btn'+numToStr;

			console.log(idPlaceHolder);
			var compBoardSpot =document.getElementsByClassName(idPlaceHolder)[0];
			console.log(compBoardSpot);
			compinput_arr.push(comp_input);
			if(player1==0){
				compBoardSpot.style.backgroundColor='blue';

			}
			else{
				compBoardSpot.style.backgroundColor='red';
			}
			
			allinput_arr.push(comp_input);

		}

		
		comp_turn = false;
		user_turn = true;
		get_user_spot();
	}
}

function checkBoardFull(){
	/*this function checks if the board is full 
	 Shuts down the turns of each player*/


	if(allinput_arr.length===9 && winners>0){
		
		console.log("board Full")
		user_turn=false;
		comp_turn=false;
		//start=false;
	}
}

function isUserWinner(){
	/* this checks if the user has won. 
	It loops through the winningArray then loops through users array of inputs to 
	 check against winning array*/
	 // arrayUser = [a,b,c,d]
	 var count =0;
	 if(userinput_arr.length>=3){
	 	for(var i=0; i<winningArray.length; i++){
	 		for(var j=0; j<userinput_arr.length;j++){
	 			if(winningArray[i].indexOf(userinput_arr[j])!==-1){
	 				count++;
	 				if(count==3){
	 					comp_turn=false;
	 					user_turn=false;
	 					winners++;
	 					document.getElementById('logOut').innerHTMl="User Wins";
	 					console.log(winningArray[i]);
	 					

	 				}
	 				else{
	 					console.log("no wins for user yet");
	 				}
	 			}
	 		}
	 		count=0;
	 	}
	 }

	 
}

function isCompWinner(){
	/* This function does the same as isUserWinner but for the computer */
	var count=0;
	console.log('Comp arr length=',compinput_arr.length);

	if(compinput_arr.length>=3){
		for (var i=0;i<winningArray.length;i++){
			for(var j=0;j<compinput_arr.length;j++){
				if(winningArray[i].indexOf(compinput_arr[j])!== -1){
					count++;
					console.log(count);
					if(count==3){
						comp_turn=false;
	 					user_turn=false;
						winners++;
						document.getElementById('logOut').innerHTMl="Computer Wins";
						
						console.log("Computer winner");
						console.log('Computer',winningArray[i]);
						
					}
					else{
						console.log("No wins for comp");
					}   
			}
		}
		count=0;

	}		

}
}