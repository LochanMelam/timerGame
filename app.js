var sec = 0;
var microSec = 0;
var sun = "☀️";
var moon = "🌙";
var element = document.querySelector(".app");
function startTimer(tag) {
  if (tag.start) {
    clearInterval(tag.start);
    if (document.querySelector(".app").innerText == "10:00") {
      document.querySelector(".verdict").innerText =
        "Well done, You have great reflexes 🤩🥳";
    } else {
      document.querySelector(".verdict").innerText =
        "Oh no!😔🙁You couldn't match the timer. Reset to try again";
    }
    tag.start = false;
    tag.removeAttribute("onclick");
    tag.disabled = true;
    document
      .querySelector(".reset")
      .setAttribute("onclick", "resetTimer(this)");
    document.querySelector(".reset").disabled = false;
  } else {
    tag.start = setInterval(executeTimer, 20);
    tag.innerHTML = "Stop";
    tag.classList.remove("btn-success");
    tag.classList.add("btn-danger");
  }
}
function resetTimer(tag) {
  element.innerText = "00:00";
  sec = 0;
  microSec = 0;
  tag.removeAttribute("onclick");
  tag.disabled = true;
  document.querySelector(".verdict").innerText = "";
  document.querySelector(".start").setAttribute("onclick", "startTimer(this)");
  document.querySelector(".start").innerText = "Start";
  document.querySelector(".start").classList.remove("btn-danger");
  document.querySelector(".start").classList.add("btn-success");
  document.querySelector(".start").disabled = false;
}
function executeTimer() {
  if (sec < 20) {
    microSec++;
    if (microSec == 60) {
      sec++;
      microSec = 0;
    }
  }
  var text;
  if (sec < 10 && microSec < 10) {
    text = `0${sec}:0${microSec}`;
  } else if (sec < 10) {
    text = `0${sec}:${microSec}`;
  } else if (microSec < 10) {
    text = `${sec}:0${microSec}`;
  } else {
    text = `${sec}:${microSec}`;
  }
  element.innerText = text;
  if (text == "20:00") {
    startTimer(document.querySelector(".start"));
  }
}
function toggleDarkTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var button = document.querySelector(".dark");
  button.innerText = button.innerText == sun ? moon : sun;
}
