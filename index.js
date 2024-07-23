let num1 = 0;
let num2 = 0;
let timerHome = 0;
let timerGuest = 0;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add1() {
  num1 += 1;
  document.getElementById("num1-el").textContent = num1;
}

function add2() {
  num1 += 2;
  document.getElementById("num1-el").textContent = num1;
}

function add3() {
  num1 += 3;
  document.getElementById("num1-el").textContent = num1;
}

function add1Guest() {
  num2 += 1;
  document.getElementById("num2-el").textContent = num2;
}

function add2Guest() {
  num2 += 2;
  document.getElementById("num2-el").textContent = num2;
}

function add3Guest() {
  num2 += 3;
  document.getElementById("num2-el").textContent = num2;
}

// Timer functionality
setInterval(function() {
  timerHome++;
  timerGuest++;
  document.getElementById("timer-home").textContent = formatTime(timerHome);
  document.getElementById("timer-guest").textContent = formatTime(timerGuest);
}, 1000);

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}