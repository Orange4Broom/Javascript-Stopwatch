let hundreds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

const appendSeconds = document.getElementById('seconds');
const appendHundreds = document.getElementById('hundreds');
const appendMinutes = document.getElementById('minutes');
const appendHours = document.getElementById('hours');

const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');

var interval;

function startTimer() {
    hundreds++
    if (hundreds <= 9) {
        appendHundreds.innerHTML = "0" + hundreds;
    }  
    if (hundreds > 9) {
        appendHundreds.innerHTML = hundreds;
    } 
    if (hundreds > 99) {
        seconds++
        appendSeconds.innerHTML = "0" + seconds;
        
        hundreds = 0;
        appendHundreds.innerHTML = "0" + 0;;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    if (seconds >= 60) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;

        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;;
    }
    if (minutes > 9) {
        appendMinutes.innerHTML = minutes;
    }
    if (minutes >= 60) {
        hours++;
        appendHours.innerHTML = "0" + hours;

        minutes = 0;
        appendMinutes.innerHTML = "0" + 0;
    }
    if(hours > 9) {
        appendHours.innerHTML = hours;
    }
}


buttonStart.onclick = function(){
    if(interval) {
        clearInterval(interval);}

    interval = setInterval(startTimer, 10); 
}

buttonStop.onclick = function(){
    clearInterval(interval);
}

buttonReset.onclick = function(){
    clearInterval(interval)
    hundreds = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
    appendSeconds.innerHTML = seconds;
    appendHundreds.innerHTML = hundreds;
    appendMinutes.innerHTML = minutes;
    appendHours.innerHTML = hours;
}

