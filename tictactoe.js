//declare all variables used in all functions here
var userinput_arr= [];
var compinput_arr=[];
var allinput_arr=[];
var user_turn=false;
var comp_turn = false;
var color1;
var color2;
var winningArray=[[1,4,7],[2,5,8],[3,6,9],[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7]];


/* declare all functions here*/

function turns(){
	/*This function will get input from html file for first turn*/
	var submit = document.getElementById('color').value;
	if(submit === 'black'){
		color1='black';

		user_turn = true;
	}
	else if(submit === 'red'){
		color2='red';
		comp_turn=true;
	}
	else{
		document.getElementById('logOut').innerHTMl= "Invalid input,red or black";
	}
}

function get_user_spot(btn){
    /* this function gets the users click values from html file*/


    if(user_turn){
    	var user_input = btn.value;
    	user_input = Number(user_input);
    	// colors the square
    	if(color1){
    		btn.style.backgroundColor="black";
    	}
    	else {
    		btn.style='red';
    	}
    	userinput_arr.push(user_input);
    	allinput_arr.push(user_input);
    	user_turn=false;
    	comp_turn=true;
    }
}

function compSpot(){
	/* this function gets the computers spot randomly*/


	if(comp_turn){
		var boardSpot = document.getElementById('btn').value;
		Number(boardSpot);
		var comp_input = Math.floor(Math.random()*10);
		if(allinput_arr.indexOf(comp_input)===-1){
			if(boardSpot=== comp_input){
				boardSpot.style.backgroundColor=''
			}
			compinput_arr.push(comp_input);
			allinput_arr.push(comp_input);

		}
		comp_turn = false;
		user_turn=true;
	}
}

function checkBoardFull(){
	/*this function checks if the board is full 
	 Shuts down the turns of each player*/


	if(allinput_arr.length>=9){
		user_turn=false;
		comp_turn=false;
	}
}

function isUserWinner(){
	/* this checks if the user has won. 
	It loops through the winningArray then loops through users array of inputs to 
	 check against winning array*/


	var counWinArrIndex=0;
	var arrinloopIndex=0;
	var count=0;
	if(userinput_arr.length>=3)
		for (var i=0;i<winningArray.length;i++){
			for(var j=0;j<userinput_arr.length;j++){
				if(winningArray[i].indexOf(userinput_arr[j])!== -1){
					count++;
					arrinloopIndex=i;
					if (count===3 && arrinloopIndex===counWinArrIndex){
						comp_turn=false;
						user_turn=false;
						document.getElementById('logOut').innerHTMl="You Win!";
					}

				}
			}
			counWinArrIndex++;
		}
}

function isCompWinner(){
	/* This function does the same as isUserWinner but for the computer */
	var counWinArrIndex=0;
	var arrinloopIndex=0;
	var count=0;
	if(compinput_arr.length>=3)
		for (var i=0;i<winningArray.length;i++){
			for(var j=0;j<compinput_arr.length;j++){
				if(winningArray[i].indexOf(compinput_arr[j])!== -1){
					count++;
					arrinloopIndex=i;
					if (count===3 && arrinloopIndex===counWinArrIndex){
						comp_turn=false;
						user_turn=false;
						document.getElementById('logOut').innerHTMl="Computer Wins!";
					}

				}
			}
			counWinArrIndex++;
		}
}