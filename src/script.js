const formContent = document.querySelector("#formContent");
const main = document.querySelector("main");
const buttonSvg = document.querySelector("svg");

const dd = document.getElementById("days");
const hh = document.getElementById("hours");
const mm = document.getElementById("minutes");
const ss = document.getElementById("seconds");

let numberOfDays = 5;
let numberOfHours = 9;
let numberOfMinutes = 23;
let numberOfSeconds = 60;

function countdownTimer() {
  numberOfSeconds--;

  if (numberOfSeconds === 0) {
    numberOfSeconds = 60;
    numberOfMinutes--;
    if (numberOfMinutes === 0) {
      numberOfMinutes = 60;
      numberOfHours--;
      if (numberOfHours === 0) {
        numberOfHours = 24;
        numberOfDays--;
      }
    }
  }
  ss.innerText =
    numberOfSeconds < 10 ? `0${numberOfSeconds}` : `${numberOfSeconds}`;
  mm.innerText =
    numberOfMinutes < 10 ? `0${numberOfMinutes}` : `${numberOfMinutes}`;
  hh.innerText = numberOfHours < 10 ? `0${numberOfHours}` : `${numberOfHours}`;
  dd.innerText = numberOfDays < 10 ? `0${numberOfDays}` : numberOfDays;
}

setInterval(countdownTimer, 1000);

function showForm() {
  formContent.removeAttribute("class", "disable");
  main.setAttribute("class", "disable");
}

function hiddenForm() {
  formContent.setAttribute("class", "disable");
  main.removeAttribute("class", "disable");
}
