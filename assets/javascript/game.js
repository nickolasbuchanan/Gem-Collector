//Global Variables
//******************************************

var gem = {
	diamond: {
		value: 0
	},
	emerald: {
		value: 0
	},
	ruby: {
		value: 0
	},
	tanz: {
		value: 0
	}
};

//Win and loss counts
var winCount = 0;
var lossCount = 0;

//Target Score and Player Score
var targetScore = 0;
var playerScore = 0;

//Functions to run game
//******************************************

//Need a random number generator code to use for target score and gem values
var makeRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Define what is needed to for the game to work
var startGame = function() {

	playerScore = 0;

	targetScore = makeRandom(19, 120);

	gem.diamond.value = makeRandom(1, 12);
	gem.emerald.value = makeRandom(1, 12);
	gem.ruby.value = makeRandom(1, 12);
	gem.tanz.value = makeRandom(1, 12);

	$("#playerScore").html(playerScore);
	$("#targetScore").html(targetScore);

	console.log("Target Score: " + targetScore);
	console.log("Diamond: " + gem.diamond.value + "| Emerald: " + gem.emerald.value + "| Ruby: " + gem.ruby.value + "| Tanzanite: " + gem.tanz.value);
};
//Add running tally of players score 
var addScore = function(gem) {

	playerScore = playerScore + gem.value;

	$("#playerScore").html(playerScore);

	winChecker();

	console.log("Player score: " + playerScore);
};

//Need to have an alert for winning and for losing
var winChecker = function() {

	if (playerScore > targetScore) {
		alert("Oh NO, You are not a winner!!!");
		console.log("Lost it");

		lossCount++;

		$("#lossCount").html(lossCount);

		startGame();
	}
	else if (playerScore == targetScore) {
		alert("Winner! Winner!");
		console.log("Win for you");

		winCount++;

		$("#winCount").html(winCount);

		startGame();
	}
}


//Main Game 
//******************************************

$("#diamond").click(function(){
	addScore(gem.diamond);
});

$("#emerald").click(function(){
	addScore(gem.emerald);
});

$("#ruby").click(function(){
	addScore(gem.ruby);
});

$("#tanz").click(function(){
	addScore(gem.tanz);
});

startGame();






