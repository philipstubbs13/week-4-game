//Arrays and Variables

//Create variable for the random number shown at the start of the game. 
//This is the target number that the user needs to get to in order to win.
var targetNumber="";

//Create variable for the hidden random number for each crystal.
//This number will be randomly generated at the start of the game.
var blueCrystalNumber = "";
var orangeCrystalNumber = "";
var pinkCrystalNumber = "";
var purpleCrystalNumber = "";

//Create variable to hold the user number.
var userNumber = "";

//Create variable for wins and losses counters.
var wins = 0;
var losses = 0;

//Create a variable to determine if user won or lost.
var userWon;

//Functions - reusable blocks of code

//start game function
function start () {
	//Hide the win-loss-div when game starts or is reset. Only show this div when game is over (user won or lost).
	$("#win-loss-div").hide();

	//Randomly generate number between 19 and 120.
	targetNumber = Math.floor(Math.random() * ((120-19) + 1) + 19);

	//Display random number in HTML when game is started.
	$("#target-number-heading").html("<h2>" + "Target number" + "</h2>").addClass("bg-primary");
	$("#target-number").html("<h4>" + targetNumber + "</h4>");

	//Reset user number when game is started or reset.
	userNumber = 0;
	$("#user-number").html("<h4>" + userNumber + "</h4>");

	//Add crystal buttons when game is started or reset.
	$("#select-crystal-text").html("<h2 id='select-crystal-text'>" + "Select a crystal" + "</h2>");

	//Generate random number from 1 to 12 for each crystal.
 	blueCrystalNumber = Math.floor(Math.random() * ((12-1) + 1) + 1);

 	orangeCrystalNumber = Math.floor(Math.random() * ((12-1) + 1) + 1);

 	pinkCrystalNumber = Math.floor(Math.random() * ((12-1) + 1) + 1);

 	purpleCrystalNumber = Math.floor(Math.random() * ((12-1) + 1) + 1);
}

//Function to add random crystal numbers to user's total
function addNumbers() {

	//When blue crystal is clicked... 
	$("#blue-crystal").on("click", function() {
		//if userNumber is less than targetNumber, add blueCrystalNumber to userNumber.
		if (userNumber < targetNumber) {
			userNumber += blueCrystalNumber;
			$("#user-number").html("<h4>" + userNumber + "</h4>");
			//Check score. See if userNumber equals targetNumber (user won) or userNumber > targetNumber (user lost).
			checkScore();
		}
	});

	//When orange crystal is clicked...
	$("#orange-crystal").on("click", function() {
		//if userNumber is less than targetNumber, add orangeCrystalNumber to userNumber.
		if (userNumber < targetNumber) {
			userNumber += orangeCrystalNumber;
			$("#user-number").html("<h4>" + userNumber + "</h4>");
			//Check score. See if userNumber equals targetNumber (user won) or userNumber > targetNumber (user lost).
			checkScore();
		}
	});

	//When pink crystal is clicked...
	$("#pink-crystal").on("click", function() {
		//if userNumber is less than targetNumber, add pinkCrystalNumber to userNumber.
		if (userNumber < targetNumber) {
			userNumber += pinkCrystalNumber;
			$("#user-number").html("<h4>" + userNumber + "</h4>");
			//Check score. See if userNumber equals targetNumber (user won) or userNumber > targetNumber (user lost).
			checkScore();
		}
	});

	//When purple crystal is clicked...
	$("#purple-crystal").on("click", function() {
		//if userNumber is less than targetNumber, add purpleCrystalNumber to userNumber.
		if (userNumber < targetNumber) {
			userNumber += purpleCrystalNumber;
			$("#user-number").html("<h4>" + userNumber + "</h4>");
			//Check score. See if userNumber equals targetNumber (user won) or userNumber > targetNumber (user lost).
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

//Game over function
function gameOver() {
	//If userWon is true...
 	if (userWon) {
 		//Show win-loss-div to display "You win!" text to the user...
 		$("#win-loss-div").show();
 		//Show win image to user..
 		$("#win-loss-image").html("<img id='win-image' src=" + "'assets/images/win-image.jpg'" + " max-width='100%'" + " height='auto'>");
 		//Add img-fluid class to win-image to make image responsive.
 		$("#win-image").addClass("img-fluid");
 		//Append reset button to play again.
 		$("#reset-button-div").append("<button id='reset-button'>" + "Click to play again" + "</button>").append("<h2 id='win-loss-text'>" + "You win!!" + "</h2>");
 		//Add styling to reset button.
 		$("#reset-button").addClass("round btn btn-secondary btn-block");
 		//When reset button is clicked, reset game.
 		$("#reset-button").on("click", function() {
 			resetGame();
 		});
 	}

 	else {
 		//If userWon is false...
 		//Show win-loss-div to display "You lost" text to the user...
 		$("#win-loss-div").show();
 		//Show loss image to user..
 		$("#win-loss-image").html("<img id='loss-image' src=" + "'assets/images/lose-image.jpg'" + " max-width='100%'" + " height='auto'>");
 		//Add img-fluid class to loss-image to make image responsive.
 		$("#loss-image").addClass("img-fluid");
 		//Append reset button to play again.
 		$("#reset-button-div").append("<button id='reset-button'>" + "Click to play again" + "</button>").append("<h2 id='win-loss-text'>" + "You went over the target number. Better luck next time." + "</h2>");
 		//Add styling to reset button.
 		$("#reset-button").addClass("round btn btn-secondary btn-block");
 		//When reset button is clicked, reset game.
 		$("#reset-button").on("click", function() {
 			resetGame();
 		});
 	}
}

//Reset game function
function resetGame () {
		//When game is reset, detach the reset button and the "You win/lost" text using jQuery.
		$("#reset-button").detach();
		$("#win-loss-text").detach();
		start();
}

//Execute code
start();
addNumbers();

