var question = document.getElementById("question");
var buttons_arr = document.getElementsByTagName("button");
var player_score = document.getElementById("score-counter");
var score = 0;

var question_counter = 20;

console.log(question, buttons_arr);

window.onload = function() {

	question_init(question_counter);
}

function question_init(counter) {

	for (var i = 0; i < buttons_arr.length; i++) {

		if (counter == 0) {

			question.innerHTML = question_bank[0];
			buttons_arr[i].innerHTML = btn_bank.question0[i];
		
		} else if (counter == 1) {

			question.innerHTML = question_bank[1];
			buttons_arr[i].innerHTML = btn_bank.question1[i];
		
		} else if (counter == 2) {

			question.innerHTML = question_bank[2];
			buttons_arr[i].innerHTML = btn_bank.question2[i];
		
		} else if (counter == 3) {

			question.innerHTML = question_bank[3];
			buttons_arr[i].innerHTML = btn_bank.question3[i];
		
		} else if (counter == 4) {

			question.innerHTML = question_bank[4];
			buttons_arr[i].innerHTML = btn_bank.question4[i];

		} else if (counter == 5) {

			question.innerHTML = question_bank[5];
			buttons_arr[i].innerHTML = btn_bank.question5[i];

		} else if (counter == 6) {

			question.innerHTML = question_bank[6];
			buttons_arr[i].innerHTML = btn_bank.question6[i];

		} else if (counter == 7) {

			question.innerHTML = question_bank[7];
			buttons_arr[i].innerHTML = btn_bank.question7[i];

		} else if (counter == 8) {

			question.innerHTML = question_bank[8];
			buttons_arr[i].innerHTML = btn_bank.question8[i];

		} else if (counter == 9) {

			question.innerHTML = question_bank[9];
			buttons_arr[i].innerHTML = btn_bank.question9[i];

		} else if (counter == 10) {

			question.innerHTML = question_bank[10];
			buttons_arr[i].innerHTML = btn_bank.question10[i];

		} else if (counter == 11) {

			question.innerHTML = question_bank[11];
			buttons_arr[i].innerHTML = btn_bank.question11[i];

		} else if (counter == 12) {

			question.innerHTML = question_bank[12];
			buttons_arr[i].innerHTML = btn_bank.question12[i];

		} else if (counter == 13) {

			question.innerHTML = question_bank[13];
			buttons_arr[i].innerHTML = btn_bank.question13[i];

		} else if (counter == 14) {

			question.innerHTML = question_bank[14];
			buttons_arr[i].innerHTML = btn_bank.question14[i];

		} else if (counter == 15) {

			question.innerHTML = question_bank[15];
			buttons_arr[i].innerHTML = btn_bank.question15[i];

		} else if (counter == 16) {

			question.innerHTML = question_bank[16];
			buttons_arr[i].innerHTML = btn_bank.question16[i];

		} else if (counter == 17) {

			question.innerHTML = question_bank[17];
			buttons_arr[i].innerHTML = btn_bank.question17[i];

		} else if (counter == 18) {

			question.innerHTML = question_bank[18];
			buttons_arr[i].innerHTML = btn_bank.question18[i];

		} else if (counter == 19) {

			question.innerHTML = question_bank[19];
			buttons_arr[i].innerHTML = btn_bank.question19[i];
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
		
		} else if (question.innerHTML == question_bank[3] && event.target.innerHTML == "81") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[4] && event.target.innerHTML == "what is 1 + 1 = ?") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[5]) {

			if (event.target.innerHTML == "Naruto" || event.target.innerHTML == "Nico Robin" || event.target.innerHTML == "Tanjiro" || event.target.innerHTML == "Nezuko") {

				score = score + 5;
				console.log(score);

				question_counter++;
				question_init(question_counter);
			
			} else {
				score--;
				console.log(score);
				question_counter++;
				question_init(question_counter);				
			}
		
		} else if (question.innerHTML == question_bank[6] && event.target.innerHTML == "256") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[7] && event.target.innerHTML == "Fresh") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[8] && event.target.innerHTML == "integer") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[9] && event.target.innerHTML == "Terminator") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[10] && event.target.innerHTML == "ADM") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[11] && event.target.innerHTML == "all the above") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[12] && event.target.innerHTML == "#ff2424") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);

		} else if (question.innerHTML == question_bank[13] && event.target.innerHTML == "promise by God") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[14]) {

			if (event.target.innerHTML == "first letter of first name and last letter of last name" || event.target.innerHTML == "A Mabaho") {

				score = score + 5;
				console.log(score);

				question_counter++;
				question_init(question_counter);

			} else {
				score--;
				console.log(score);
				question_counter++;
				question_init(question_counter);
			}
		
		} else if (question.innerHTML == question_bank[15] && event.target.innerHTML == "JavaScript") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[16] && event.target.innerHTML == "synthetic crystal") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[17] && event.target.innerHTML == "DPS-healer") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[18] && event.target.innerHTML == "true") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[19] && event.target.innerHTML == "LiveScript") {
			score = score + 5;
			console.log(score);

			question_counter++;
			question_init(question_counter);
		
		} else if (question.innerHTML == question_bank[20] && event.target.innerHTML == "im st00pid") {
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

		if (question_counter >= 20) {

			$("#quiz-section").delay(1000).fadeOut(1000);
			$("#results-section").delay(3000).fadeIn(500);
			$("#qr-container").delay(6000).fadeIn(200);

			document.getElementById("your-score").innerHTML += score;

			if (score < 60) {

				new QRCode(document.getElementById("qr-container"), ls_data);
				console.log("low");

			} else if (score > 60) {

				new QRCode(document.getElementById("qr-container"), hs_data);
				console.log("high");

			} else {

				new QRCode(document.getElementById("qr-container"), qr_data);
			}	
		}

		player_score.style.opacity = "0";

		setTimeout(function() {
			player_score.innerHTML = score;
			player_score.style.opacity = "1";

		}, 300);
	}
}

document.addEventListener('contextmenu', event => event.preventDefault());