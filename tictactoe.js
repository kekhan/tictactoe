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



/* declare all functions here*/

function turns(){
	/*This function will get input from html file for first turn*/
	var submit = document.getElementById('color').value;
	if(submit === 'black'){
		player1++;

		user_turn = true;
		get_user_spot();
	}
	else if(submit === 'red'){
		
		comp_turn=true;
		compSpot();
	}
	else{
		document.getElementById('logOut').innerHTMl= "Invalid input,red or black";
	}
}

function get_user_spot(btn){
    /* this function gets the users click values from html file*/
    console.log("user",userinput_arr); 
    console.log("all", allinput_arr);
    checkBoardFull();
    isUserWinner();


    if(user_turn){
    	//console.log("users turn");
    	var user_input = btn.value;
    	user_input = Number(user_input);
    	// colors the square
    	if(allinput_arr.indexOf(user_input)=== -1){
			userinput_arr.push(user_input);
			allinput_arr.push(user_input);
			if(player1>0){
    		btn.style.backgroundColor="black";

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
	console.log("comp",compinput_arr);
	checkBoardFull();
	isCompWinner();
	if(comp_turn){
		console.log('comp turn');
		var comp_input = Math.floor(Math.random()*9);
		if(allinput_arr.indexOf(comp_input)===-1){
			compinput_arr.push(comp_input);
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


	if(allinput_arr.length===9){
		
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
	 console.log("Checking if user is winner");


	

	if(userinput_arr.length>=3){
		for (var i=0;i<winningArray.length;i++){
			for(var j=0;j<userinput_arr.length;j++){
				if(winningArray[i].indexOf(userinput_arr[j])){
						console.log(winningArray[i]);
						comp_turn=false;
						user_turn=false;
						console.log("user wins");
						//start=false;
					}
					else{
						console.log("no win yet");
					}

				
			}

		}

	}
		
}

function isCompWinner(){
	/* This function does the same as isUserWinner but for the computer */
	console.log("Checking if comp is winner");
	if(compinput_arr.length>=3){
		for (var i=0;i<winningArray.length;i++){
			for(var j=0;j<compinput_arr.length;j++){
				if(winningArray[i].indexOf(compinput_arr[j])){
				    console.log(winningArray[i]);	
					comp_turn=false;
					user_turn=false;
					console.log("computer Wins")
						//start=false;
					}
					else{
						console.log("no win yet");
					}

				
			}
		}

	}		

}