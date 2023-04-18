let interval;
let seconds = 0;

const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  let seconds = 0;
  setInterval(() => {
    seconds++;
    console.log(seconds);
  }, 1000);
}

startTimer();

function startTimer() {
  interval = setInterval(() => {
    seconds++;
    console.log(seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  seconds = 0;
  console.log(seconds);
}

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

function displayTime() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  minutesDisplay.textContent = padTime(minutes);
  secondsDisplay.textContent = padTime(remainingSeconds);
}

function padTime(time) {
  return time < 10 ? `0${time}` : time;
}

function startTimer() {
  interval = setInterval(() => {
    seconds++;
    displayTime();
  }, 1000);
}
