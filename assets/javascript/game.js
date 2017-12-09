//Arrays and Variables
//Create variable for the random number shown at the start of the game.
var targetNumber="";

//Create variable for the hidden random number for each crystal.
var blueCrystalNumber = "";
var orangeCrystalNumber = "";
var pinkCrystalNumber = "";
var purpleCrystalNumber = "";

//Create variable to hold user score.
var userScore = "";

//Create variable for wins and losses counter.
var wins = 0;
var losses = 0;





//Functions
function start () {
	//Randomly generate number between 19 and 120.
	targetNumber = Math.floor(Math.random() * ((120-19) + 1) + 19);
	console.log(targetNumber);
	//Display random number in HTML when game is started.
	$("#target-number-heading").html("<h2>" + "Target number" + "</h2>").addClass("bg-primary");
	$("#target-number").html("<h4>" + targetNumber + "</h4>");

	//Reset user score at start/reset of game
	userScore = 0;
	$("#user-score").html("<h4>" + userScore + "</h4>");

	//When game is started/reset, change number of wins in the HTML file.
	$(".win-counter").html(wins);
	console.log(wins);

	//When game is started/reset, Change number of losses in the HTML file.
	$(".loss-counter").html(losses);
	console.log(losses);
}



//Execute code
start();