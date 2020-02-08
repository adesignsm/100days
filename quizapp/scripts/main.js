var question = document.getElementById("question");
var buttons_arr = document.getElementsByTagName("button");
var score = 0;
var question_counter = 0;

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

question.textContent = question_bank[Math.floor(Math.random() * question_bank.length)];
if (question.textContent == question_bank[0]) {
	buttons_arr[0].innerHTML = btn_bank.question1[0];
	buttons_arr[1].innerHTML = btn_bank.question1[1];
	buttons_arr[2].innerHTML = btn_bank.question1[2],
	buttons_arr[3].innerHTML = btn_bank.question1[3];

} else if (question.textContent == question_bank[1]) {
	buttons_arr[0].innerHTML = btn_bank.question2[0];
	buttons_arr[1].innerHTML = btn_bank.question2[1];
	buttons_arr[2].innerHTML = btn_bank.question2[2];
	buttons_arr[3].innerHTML = btn_bank.question2[3];	

} else if (question.textContent == question_bank[2]) {
	buttons_arr[0].innerHTML = btn_bank.question3[0];
	buttons_arr[1].innerHTML = btn_bank.question3[1];
	buttons_arr[2].innerHTML = btn_bank.question3[2];
	buttons_arr[3].innerHTML = btn_bank.question3[3];

} else if (question.textContent == question_bank[3]) {
	buttons_arr[0].innerHTML = btn_bank.question4[0];
	buttons_arr[1].innerHTML = btn_bank.question4[1];
	buttons_arr[2].innerHTML = btn_bank.question4[2];
	buttons_arr[3].innerHTML = btn_bank.question4[3];
}

buttons_arr[0].onclick = function(event) {
	
	if (question.textContent === question_bank[0]) {
		console.log("correct");
		score = score + 5;
		question_counter = 1;
	
	} else  if (question.textContent === question_bank[3]) {
		console.log("correct");	
		score = score + 5;
	
	} else {
		console.log("wrong");
		score--;
		question_counter = 0;
	}

	if (question_counter == 0 || question_counter == 1) {

		question.textContent = question_bank[Math.floor(Math.random() * question_bank.length)];
	}
}

buttons_arr[1].onclick = function(event) {

	if (question.textContent === question_bank[1]) {

		console.log("correct");
		score = score + 5;
		question_counter = 1;
	
	} else {
		console.log("wrong");
		score--;
		question_counter = 0;
	}

	if (question_counter == 0 || question_counter == 1) {

		question.textContent = question_bank[Math.floor(Math.random() * question_bank.length)];
	}
}

buttons_arr[2].onclick = function(event) {

	if (question.textContent === question_bank[2]) {

		console.log("wrong");
		score--;
		question_counter = 0;
	
	} else {
		console.log("wrong");
		score--;
		question_counter = 0;
	} 

	if (question_counter == 0 || question_counter == 1) {

		question.textContent = question_bank[Math.floor(Math.random() * question_bank.length)];
	}
}

buttons_arr[3].onclick = function(event) {

	if (question.textContent === question_bank[2]) {

		console.log("correct");
		score = score + 5;
		question_counter = 1;
	
	} else {
	 	console.log("wrong");
	 	score--;
	 	question_counter = 0;
	}

	if (question_counter == 0 || question_counter == 1) {

		question.textContent = question_bank[Math.floor(Math.random() * question_bank.length)];
	}
}