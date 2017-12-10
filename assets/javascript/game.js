//Arrays and Variables

//Create variable for the random number shown at the start of the game. 
//This is the target number that the user needs to get to.
var targetNumber="";

//Create variable for the hidden random number for each crystal.
//This number will be randomly generated at the start of the game.
var blueCrystalNumber = "";
var orangeCrystalNumber = "";
var pinkCrystalNumber = "";
var purpleCrystalNumber = "";

//Create variable to hold user number.
var userNumber = "";

//Create variable for wins and losses counter.
var wins = 0;
var losses = 0;

//Create a variable to determine if user won or lost.
var userWon;

//Create variables for crystal buttons
var blueCrystalBtn = "<img id='blue-crystal' width= '110px' height='100px' src='../week-4-game/assets/images/blue-crystal.png'/>";
var orangeCrystalBtn = "<img id='orange-crystal' width= '110px' height='100px' src='../week-4-game/assets/images/orange-crystal.png'/>";
var pinkCrystalBtn = "<img id='pink-crystal' width= '110px' height='100px' src='../week-4-game/assets/images/pink-crystal.png'/>";
var purpleCrystalBtn = "<img id='purple-crystal' width= '110px' height='100px' src='../week-4-game/assets/images/purple-crystal.png'/>";


//Functions

//start game function
function start () {
	//Randomly generate number between 19 and 120.
	targetNumber = Math.floor(Math.random() * ((120-19) + 1) + 19);
	console.log(targetNumber);

	//Display random number in HTML when game is started.
	$("#target-number-heading").html("<h2>" + "Target number" + "</h2>").addClass("bg-primary");
	$("#target-number").html("<h4>" + targetNumber + "</h4>");

	//Reset user number at start/reset of game
	userNumber = 0;
	$("#user-number").html("<h4>" + userNumber + "</h4>");

	//Add crystal buttons at start/reset of game.
	$("#select-crystal-text").html("<h2 id='select-crystal-text'>" + "Select a crystal" + "</h2>");

	//Generate random number from 1 to 12 for each crystal.
 	blueCrystalNumber = Math.floor(Math.random() * ((12-1) + 1) + 1);
 	console.log(blueCrystalNumber);

 	orangeCrystalNumber = Math.floor(Math.random() * ((12-1) + 1) + 1);
 	console.log(orangeCrystalNumber);

 	pinkCrystalNumber = Math.floor(Math.random() * ((12-1) + 1) + 1);
 	console.log(pinkCrystalNumber);

 	purpleCrystalNumber = Math.floor(Math.random() * ((12-1) + 1) + 1);
 	console.log(purpleCrystalNumber);
}

//Function to add random crystal numbers to user's total
function addNumbers() {

	//When blue crystal is clicked, add blueCrystalNumber to userNumber.
	$("#blue-crystal").on("click", function() {
		if (userNumber < targetNumber) {
			userNumber += blueCrystalNumber;
			console.log(userNumber);
			$("#user-number").html("<h4>" + userNumber + "</h4>");
			checkScore();
		}
	});

	//When orange crystal is clicked, add orangeCrystalNumber to userNumber.
	$("#orange-crystal").on("click", function() {
		if (userNumber < targetNumber) {
			userNumber += orangeCrystalNumber;
			console.log(userNumber);
			$("#user-number").html("<h4>" + userNumber + "</h4>");
			checkScore();
		}
	});

	//When pink crystal is clicked, add pinkCrystalNumber to userNumber.
	$("#pink-crystal").on("click", function() {
		if (userNumber < targetNumber) {
			userNumber += pinkCrystalNumber;
			console.log(userNumber);
			$("#user-number").html("<h4>" + userNumber + "</h4>");
			checkScore();
		}
	});

	//When purple crystal is clicked, add purpleCrystalNumber to userNumber.
	$("#purple-crystal").on("click", function() {
		if (userNumber < targetNumber) {
			userNumber += purpleCrystalNumber;
			console.log(userNumber);
			$("#user-number").html("<h4>" + userNumber + "</h4>");
			checkScore();
		}	
	});	
}

//Compare user score to target number
function checkScore(){
	//if userNumber equals targetNumber, user wins and game is over.
	if (userNumber == targetNumber) {
		userWon = true;
		//Add 1 to wins counter.
		wins++;
		$(".win-counter").html(wins);
		gameOver();
	}

	//If userNumber is greater than targetNumber, user loses and game is over.
	else if (userNumber > targetNumber) {
		userWon = false;
 		//Add 1 to losses counter.
 		losses++;
 		$(".loss-counter").html(losses);
 		gameOver();
	}
}

//Game over
function gameOver() {
 	if (userWon) {
 		//Append Play again? button
 		$("#reset-button-div").append("<button id='reset-button'>" + "Click to play again" + "</button>").append("<h2 id='win-loss-text'>" + "You win!!" + "</h2>");
 		$("#reset-button").addClass("round btn btn-secondary btn-block");
 		$("#reset-button").on("click", function() {
 			resetGame();
 		});
 	}

 	else {
 		//Append Play again? button
 		$("#reset-button-div").append("<button id='reset-button'>" + "Click to play again" + "</button>").append("<h2 id='win-loss-text'>" + "You went over the target number. Better luck next time." + "</h2>");
 		$("#reset-button").addClass("round btn btn-secondary btn-block");
 		$("#reset-button").on("click", function() {
 			resetGame();
 		});
 	}
}

//Reset game
function resetGame () {
		$("#reset-button").detach();
		$("#win-loss-text").detach();
		start();
}

//Execute code
start();
addNumbers();

