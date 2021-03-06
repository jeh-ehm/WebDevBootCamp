
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

$(document).keydown(nextSequence);

$(".btn").on("click", function () {
	var userChosenColour = $(this).attr("id");
	userClickedPattern.push(userChosenColour);
	playSound(userChosenColour);
	animatePress(userChosenColour);
});

function nextSequence() {

	var randomNumber = Math.floor(Math.random() * 4) ;
	var randomChosenColour = buttonColours[randomNumber];

	gamePattern.push(randomChosenColour);
	$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomChosenColour);
}

function playSound(name) {
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

function animatePress(currentColour) {
	$("." + currentColour).addClass("pressed");
	setTimeout(() => {
		$("." + currentColour).removeClass("pressed");
	}, 100);
	
}
