
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
	
	var buttonInnerHTML = this.innerHTML;
	makeSound(buttonInnerHTML)
	
}

document.addEventListener("keydown", function(event){
	makeSound(event.key)
});

function makeSound(key) {

	if (key === 'w') {
		var tom1 = new Audio("sounds/tom-1.mp3");
		tom1.play();
	} 
	else if (key === 'a') {
		var tom2 = new Audio("sounds/tom-2.mp3");
		tom2.play();
	}
	else if (key === 's') {
		var tom3 = new Audio("sounds/tom-3.mp3");
		tom3.play();
	}
	else if (key === 'd') {
		var tom4 = new Audio("sounds/tom-4.mp3");
		tom4.play();
	}
	else if (key === 'j') {
		var snare = new Audio("sounds/snare.mp3");
		snare.play();
	}
	else if (key === 'k') {
		var crash = new Audio("sounds/crash.mp3");
		crash.play();
	}
	else if (key === 'l') {
		var kickBass = new Audio("sounds/kick-bass.mp3");
		kickBass.play();
	}
}
