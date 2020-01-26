var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

function getTimeandDate() {

	var today = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	document.getElementById("date").textContent = [today.getDate(), months[today.getMonth()], today.getFullYear()].join(" / ");
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();

	hours.textContent = h - 12;
	minutes.textContent = m;
	seconds.textContent = s;

	hours.style.color = "#ff6961";
	minutes.style.color = "#aec6cf";
	seconds.style.color = "#11ff88";

	document.getElementById("progress-bar-h").style.width = h + "%";
	document.getElementById("progress-bar-m").style.width = m + "%";
	document.getElementById("progress-bar-s").style.width = s + "%";

	setTimeout(getTimeandDate, 1000);

}

hours.onclick = function() {

	console.log("hours");
}

minutes.onclick = function() {
	console.log("minutes");
}

seconds.onclick = function() {
	console.log("seconds");
}

getTimeandDate();



