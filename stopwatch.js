let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapCounter = 1;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const lapsList = document.getElementById('lapsList');

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 10);
        running = true;
        startStopButton.innerHTML = "Stop";
        startStopButton.style.backgroundColor = "#dc3545";
    } else {
        clearInterval(tInterval);
        running = false;
        startStopButton.innerHTML = "Start";
        startStopButton.style.backgroundColor = "#28a745";
        addLap();
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    startStopButton.innerHTML = "Start";
    startStopButton.style.backgroundColor = "#28a745";
    display.innerHTML = "00:00:00.00";
    lapsList.innerHTML = "";
    lapCounter = 1;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    display.innerHTML = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

function addLap() {
    let lapTime = display.innerHTML;
    let lapItem = document.createElement('li');
    lapItem.innerHTML = `Lap ${lapCounter}: ${lapTime}`;
    lapsList.appendChild(lapItem);
    lapCounter++;
}
