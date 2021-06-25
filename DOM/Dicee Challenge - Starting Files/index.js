
function RNG(){

    var temp = Math.floor((Math.random() * 6) + 1); 
    return temp;

}

var randomNumber1 = RNG();
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = RNG();
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").textContent = "Player 1 Wins";
} 

else if (randomNumber1 < randomNumber2) {
	document.querySelector("h1").textContent = "Player 2 Wins";
} 

else {
	document.querySelector("h1").textContent = "Draw";
}