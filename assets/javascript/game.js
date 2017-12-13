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
var tagetScore = 0;
var playerScore = 0;

//Functions to run game
//******************************************

//This code will simplify the random number generator
var makeRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Define what is needed to for the game to work
var startGame = function() {

	var playerScore = 0;

	targetScore = makeRandom(19, 120);

	gem.diamond.value = makeRandom(1, 12);
	gem.emerald.value = makeRandom(1, 12);
	gem.ruby.value = makeRandom(1, 12);
	gem.tanz.value = makeRandom(1, 12);

	console.log("Target Score: " + targetScore);
	console.log("Diamond: " + gem.diamond.value + "| Emerald: " + gem.emerald.value + "| Ruby: " + gem.ruby.value + "| Tanzanite: " + gem.tanz.value);
}

//Main Game 
//******************************************

$("#diamond").click(function(){
	alert("you got it");
});

$("#emerald").click(function(){
	alert("you got it");
});

$("#ruby").click(function(){
	alert("you got it");
});

$("#tanz").click(function(){
	alert("you got it");
});

startGame();






