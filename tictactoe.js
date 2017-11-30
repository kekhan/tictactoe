var user_arr=[];
var comp_arr=[];
var all_arr=[];
var start = true;
var winningVar= [[1,4,7],[2,5,8],[3,6,9],[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7]];
function main(){
	while(start){
	    get_comp_spot();
	    checkBoardFull();
	    console.log("all",all_arr);
	    console.log("comp",comp_arr)

	}
}


function get_user_spot(btn){
	//
	var user_input = Number(btn.value);
	user_arr.push(user_input);
	all_arr.push(user_input);
	console.log(user_arr);
	console.log("all",all_arr);
}


function get_comp_spot(){
	var comp_input = Math.floor(Math.random()*10);
	if (all_arr.indexOf(comp_input)){
		comp_input = Math.floor(Math.random()*10);
	}
	else {
		comp_arr.push(comp_input);
	}
	all_arr.push(comp_input);
	//checkCompInput(comp_input);
	console.log(comp_arr);
	console.log("all",all_arr);
}
function checkBoardFull(){
	if(all_arr.length>=9){
		document.getElementById('btn').style.bg = "black";
	}
}

/*function checkwinner(){
	var count_user=0;
	var count_comp=0;
	if(user_arr.length>=3){
		user_arr.sort(function(a, b){return a-b});
		for (var i=0; i<user_arr.length;i++){
			for (var j=0;j<winningVar.length;j++){
				if(winningVar[j].indexOf(user_arr[i])){
					count_user++;
					if(count_user === 3){
						console.log("USER is Winner");

					}
				}
			}
		}
	}
	else if(comp_arr>=3){
		comp_arr.sort(function(a,b){return a-b});	
		for(var k=0;k<comp_arr.length;k++){
			for (var l=0;l<winningVar.length;l++){
				if(winningVar[l].indexOf(comp_arr[k])){
					count_comp++;
					if(count_comp===3){
						console.log("Computer is winner");
					}
				}

			}
		}
	}

	}*/



