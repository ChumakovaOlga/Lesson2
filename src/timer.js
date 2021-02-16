import beepFile from "./beep.wav";
import endFile from "./end.wav";

const timerInput = document.getElementById("time");
const buttonRun = document.getElementById("button1");
const buttonStop =  document.getElementById("button2")
const timerShow = document.getElementById("timer");
const beep = new Audio(beepFile);
const end = new Audio(endFile);

let timeMinut;
buttonRun.addEventListener('click', function() {
    timeMinut = parseInt(timerInput.value) * 60

})
buttonStop.addEventListener('click', function() {
    timeMinut = clearInterval(timer);
    beep.play();
})

let timer;
timer = setInterval(function () {
    let seconds = timeMinut % 60;
    let minutes = timeMinut / 60 % 60;
    let hour = timeMinut / 60 / 60 % 60;
    if (timeMinut <= 0) {
        timeMinut = clearInterval(timer);
        end.play();
    } else if (timeMinut !== undefined && !isNaN(timeMinut)){
        timerShow.innerHTML = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
    }
    --timeMinut;
}, 1000)

