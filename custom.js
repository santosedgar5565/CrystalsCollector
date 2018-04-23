var randomNumber = "";
var clickedNumbers = [];
var crystalNumbers = [];
var totalScore = "";
var wins = 0;
var losses = 0;
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var crystalsRandom = [];

// $(document).ready(function() {
// 	$("jewel1-btn").click(function() {

// 		console.log("testttttt");
// 	});
// });





function startGame() {
	totalScore = 0;
	randomNumber = 0;
	crystalsRandom = [];
	clickedNumbers = [];
	
	var randomNumber = Math.floor(Math.random() * 50);
	// console.log(randomNumber);

	document.getElementById("randomNumber").innerHTML = randomNumber;

	// $("#randomNumber");


	crystalOne = Math.floor(Math.random() * 9);
	crystalTwo = Math.floor(Math.random() * 9);
	crystalThree = Math.floor(Math.random() * 9);	
	crystalFour = Math.floor(Math.random() * 9);

	if((crystalOne !== crystalTwo) && (crystalTwo !== crystalThree) && (crystalThree !== crystalFour) && (crystalTwo !== crystalFour) && (crystalOne !== crystalThree) && (crystalOne !== crystalFour)) {
		crystalsRandom.push(crystalOne, crystalTwo, crystalThree, crystalFour);
		crystalOne == crystalsRandom[0];
		crystalTwo == crystalsRandom[1];
		crystalThree == crystalsRandom[2];
		crystalFour == crystalsRandom[3];
		console.log(crystalOne);
		console.log(crystalsRandom); 

		
	}

		else { 
			startGame() }
}

var startbutton = document.querySelector("#startbutton");
startbutton.addEventListener("click", startGame);


function crystalClicked(e) {
	e.preventDefault();
	//console.log(e);
	// console.log("crystal #" + e.target.parentElement.dataset.id + " was clicked");
	console.log(crystalsRandom[e.target.parentElement.dataset.id]);
	totalScore += crystalsRandom[e.target.parentElement.dataset.id];
	document.querySelector("#total-score").innerHTML = totalScore;

	}
console.log(randomNumber);
console.log(totalScore);
	




function crystalNumber1(e) {
	e.preventDefault();
	console.log(crystalOne);
}

// function crystalNumber2(e) {
// 	e.preventDefault();
// 	console.log(crystalTwo);
// }

// function crystalNumber3(e) {
// 	e.preventDefault();
// 	console.log(crystalThree);
// }

// function crystalNumber4(e) {
// 	e.preventDefault();
// 	console.log(crystalFour);
// }

console.log(++crystalOne);


// var startbutton = document.querySelector("#startbutton");
// startbutton.addEventListener("click", startGame);

var jewels = document.querySelectorAll(".jewel");

for (var i = 0; i < jewels.length; i++) {
	jewels[i].addEventListener("click", crystalClicked);
}


$(".jewel1").on("click", function(event) {
	var randomNumber = $("#randomNumber").val();
	var totalScore = $("#total-score").val();
	console.log("THis is a test" + randomNumber + totalScore);
	if ((randomNumber === totalScore) && (randomNumber > 0))  {
		alert("You Win!");
	}

});





	

		// var jewel1btn = document.getElementById("jewel1-btn");
		// jewel1btn.addEventListener('click', function(){ jewel1btn.style.background = "lightblue"});




















// startGame();






