let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCount = 1;

function start() {
    timer = setInterval(displayTime, 10);
}

function stop() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCount = 1;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("lapList").innerHTML = "";
}

function lap() {
    let lapTime = document.getElementById("display").innerText;
    let lapItem = document.createElement("li");
    lapItem.innerText = "Lap " + lapCount + ": " + lapTime;
    document.getElementById("lapList").appendChild(lapItem);
    lapCount++;
}

function displayTime() {
    milliseconds++;
    if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    let displayMilliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    document.getElementById("display").innerText = `${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;
}
