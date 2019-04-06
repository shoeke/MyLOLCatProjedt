//global variable for event window DOM
var viewerPic = document.getElementById("lolcat");
//Choose picture based on time
var currentTime = new Date();
var hour = currentTime.getHours();
window.onload = function loadClock(){
  var ampm = "PM"
  if (currentTime.getHours() < 12) {
    ampm = "AM"
  }
//get minutes add 0 when only 1 digit and only show last two indexes. This converts it to text. May need to use parseInt for app calcs.
  var minutes = currentTime.getMinutes();
  minutes = "0" + minutes;
  minutes = minutes.slice(-2);
//make 12 hour clock
  if (hour > 12) {
    hour = hour - 12;
  }
//concat time for clock
  var message = hour + ":" + minutes + " " + ampm;
  console.log(message);
  var dispClock = document.getElementById("displayClock");
  dispClock.innerHTML = message;
}
//have the photo change for morning, afternoon, night
function loadPic(){
  var timeHour = new Date().getHours();
  var saying = document.getElementById("timeEvent");

  if (timeHour >= 23 || timeHour <= 5) {
    //saying.innerHTML = "Go and Sleep!"
    viewerPic.src = "img/sleep.jpg";
  }
  if (timeHour >= 6 && timeHour <= 10) {
    //saying.innerHTML = "Good Morning!!"
    viewerPic.src = "img/goodMorning.jpg";
  }
  if (timeHour >= 11 && timeHour <= 22) {
    //saying.innerHTML = "Seize the Day!!"
    viewerPic.src = "img/seize.jpg";
  }
  else {
    viewerPic.style.background = "#000";
  }
}
loadPic();
//show party pic when party button pushed.
//set variable for button
var button = document.getElementById("partyTimeButton");
//var viewerPic = document.getElementById("lolcat");
function partyTime() {
  viewerPic.src = "img/catParty.jpg";
}
function endPartyTime() {
  loadPic();
}

//show a different picture when the clock time matches the time set for Wake Up, Lunch and Nap Time.
var napTime = document.getElementById("napTimeSelector").value;
console.log(document.getElementById("napTimeSelector").value);
if (napTime == hour) {
  viewerPic.src = "img/sleep.jpg";
}
