var question = document.getElementById("question");
var buttons_arr = document.getElementsByTagName("button");
var player_score = document.getElementById("score-counter");
var score = 0;

var question_counter = 1;

console.log(question, buttons_arr);

var question_bank = [

	"what is 1 + 1", 
	"what is the capital city of Canada",
	"if bob got 5 apples and he ate gatorade but then went to jail for eating milk, how many cools does he have",
	"9 x 9 = ?"
];

var btn_bank = {

	question1: [
		"2", 
		"window", 
		"11", 
		"x"
	],

	question2: [
		"Toronto", 
		"Ottawa", 
		"ANTARTICA", 
		"Mars"
	],

	question3: [
		"idk", 
		"alot of cools", 
		"999", 
		"meaty eyes"
	],

	question4: [
		"81", 
		"99", 
		"im st00pid", 
		"me nah know"
	]
};

window.onload = function() {

	question_init(1);
}

function question_init(counter) {

	for (var i = 0; i < buttons_arr.length; i++) {

		if (counter == 1) {

			question.innerHTML = question_bank[0];
			buttons_arr[i].innerHTML = btn_bank.question1[i];
		
		} else if (counter == 2) {

			question.innerHTML = question_bank[1];
			buttons_arr[i].innerHTML = btn_bank.question2[i];
		
		} else if (counter == 3) {

			question.innerHTML = question_bank[2];
			buttons_arr[i].innerHTML = btn_bank.question3[i];
		
		} else if (counter == 4) {

			question.innerHTML = question_bank[3];
			buttons_arr[i].innerHTML = btn_bank.question4[i];
		} 
	} 
}

for (var button of buttons_arr) {

	button.onclick = function(event) {

		if (question.innerHTML == question_bank[0] && event.target.innerHTML == "2") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[1] && event.target.innerHTML == "Ottawa") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[2] && event.target.innerHTML == "meaty eyes") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[3] && event.target.innerHTML == "im st00pid") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else {
			score--;

			if (score < 0) {

				score = 0;
				console.log(score);
			}

			question_counter++;
			question_init(question_counter);
		}

		if (question_counter >= 4) {

			question_counter = 0;
		}

		player_score.style.opacity = "0";

		setTimeout(function() {
			player_score.innerHTML = score;
			player_score.style.opacity = "1";
		}, 300);
	}
}