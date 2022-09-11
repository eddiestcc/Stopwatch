// Retrieved button elements from the DOM
const startButton = document.getElementById("button-start");
const stopButton = document.getElementById("button-stop");
const resetButton = document.getElementById("button-reset");
// Retrieved time from the DOM
let appendSecs = document.getElementById("seconds");
let appendTens = document.getElementById("tens");
// Assigned defaul values to time
let defaultSecs = 00;
let defaultTens = 00;
let interval;
// Creating functions that run when button is clicked

// Start Button
startButton.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer,10);
};

// Stop Button
stopButton.onclick = () => {
    clearInterval(interval);
};

// Reset Button
resetButton.onclick = () => {
    defaultSecs = "00";
    defaultTens = "00";
    appendSecs.innerHTML = defaultSecs;
    appendTens.innerHTML = defaultTens;
};

// Start Timer Function
function startTimer() {

    defaultTens++;
    console.log("tens",defaultTens);
    console.log("secs",defaultSecs);
    if (defaultTens <= 9){
        appendTens.innerHTML = "0" + defaultTens;
    };
    if (defaultTens > 9){
        appendTens.innerHTML = defaultTens;
    };
    if (defaultTens > 99){    
        console.log("1 second");
        defaultSecs++;
        // debugger
        appendSecs.innerHTML = "0"+ defaultSecs;
        defaultTens = 0;
    };
    if (defaultSecs > 9) {
        appendSecs.innerHTML = defaultSecs;
    };
};
