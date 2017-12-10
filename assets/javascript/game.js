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

var detachButtons;

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
			userNumber += blueCrystalNumber;
			console.log(userNumber);
			$("#user-number").html("<h4>" + userNumber + "</h4>");

			//if userNumber equals targetNumber, user wins and game is over.
			if (userNumber == targetNumber) {
				userWon = true;
				gameOver();
			}

			//If userNumber is greater than targetNumber, user loses and game is over.
			else if (userNumber > targetNumber) {
				userWon = false;
				gameOver();
			}
		});

		//When orange crystal is clicked, add orangeCrystalNumber to userNumber.
		$("#orange-crystal").on("click", function() {
			userNumber += orangeCrystalNumber;
			console.log(userNumber);
			$("#user-number").html("<h4>" + userNumber + "</h4>");

			//if userNumber equals targetNumber, user wins and game is over.
			if (userNumber == targetNumber) {
				userWon = true;
				gameOver();
			}

			//If userNumber is greate than targetNumber, user loses and game is over.
			else if (userNumber > targetNumber) {
				userWon = false;
				gameOver();
			}
		});

		//When pink crystal is clicked, add pinkCrystalNumber to userNumber.
		$("#pink-crystal").on("click", function() {
			userNumber += pinkCrystalNumber;
			console.log(userNumber);
			$("#user-number").html("<h4>" + userNumber + "</h4>");

			//if userNumber equals targetNumber, user wins and game is over.
			if (userNumber == targetNumber) {
				userWon = true;
				gameOver();
			}

			//If userNumber is greater than targetNumber, user loses and game is over.
			else if (userNumber > targetNumber) {
				userWon = false;
				gameOver();
			}
		});

		//When purple crystal is clicked, add purpleCrystalNumber to userNumber.
		$("#purple-crystal").on("click", function() {
			userNumber += purpleCrystalNumber;
			console.log(userNumber);
			$("#user-number").html("<h4>" + userNumber + "</h4>");
			
			//if userNumber equals targetNumber, user wins and game is over.
			if (userNumber == targetNumber) {
				userWon = true;
				gameOver();
			}

			//If userNumber is greater than targetNumber, user loses and game is over.
			else if (userNumber > targetNumber) {
				userWon = false;
				gameOver();
			}
		});	

//Game over
function gameOver() {
	if (userWon) {
		//When user wins, remove div that contains crystal buttons so that user cannot keep clicking them.
		$("#select-crystal").remove();
		//Add "You win" text.
		$("#game-over").html("<h1>" + "You win!!" + "</h2>").addClass("jumbotron bg-primary text-white");
		//Add win image.
		$("#game-over").append("<img id='win-image' src='../week-4-game/assets/images/win-image.jpg'/>");
		//Update image css properties.
		$('#win-image').width(300).height(225).addClass("rounded-circle");
		//Add 1 to wins counter.
		wins++;
		$(".win-counter").html(wins);
		//Append Play again? button
		$("#game-over").append("<br>" + "<br>" + "<button id='reset-button'>" + "Click to play again" + "</button>");
		$("reset-button").addClass("rounded btn btn-secondary");
		resetGame();
	}

	else {
		//When user loses, remove div that contains crystal buttons so that user cannot keep clicking them.
		$("#select-crystal").detach();
		//Add "You lose" text.
		$("#game-over").html("<h1>" + "You went over the target number. Better luck next time." + "</h2>").addClass("jumbotron bg-primary text-white");
		//Append lose image
		$("#game-over").append("<img id='lose-image' src='../week-4-game/assets/images/lose-image.jpg'/>");
		//Update image css properties.
		$('#lose-image').width(300).height(250).addClass("rounded-circle");
		//Add 1 to losses counter.
		losses++;
		$(".loss-counter").html(losses);
		//Append Play again? button
		$("#game-over").append("<br>" + "<br>" + "<button id='reset-button'>" + "Click to play again" + "</button>");
		$("reset-button").addClass("rounded btn btn-secondary");
		resetGame();
	}
}

//Reset game
function resetGame () {
	$("#reset-button").on("click", function() {
		start();
		$("#game-over").detach();
		$('#game-over').replaceWith('#select-crystal');
		// $('#select-crystal').append('#attachButtons');
		//$("#select-crystal-gameover").append("<div id='select-crystal'>");
	});
}
}

//Execute code
start();
addNumbers();

