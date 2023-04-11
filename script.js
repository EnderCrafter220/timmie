var startTime, intervalId;
var stopwatchElement = document.getElementById('stopwatch')
var startStopButton = document.getElementById('start-stop-button')

startStopButton.addEventListener('click', function() {
    if (startStopButton.innerHTML === 'Start') {
        startStopButton.innerHTML = 'Stop';
        startTime = new Date().getTime();
        intervalId = setInterval(updateStopwatch, 10);
    } else {
        startStopButton.innerHTML = 'Start';
        clearInterval(intervalId);
    }
})

function updateStopwatch() {
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime;
    var minutes = Math.floor(elapsedTime / (1000*60));
    var seconds = Math.floor((elapsedTime % (1000*60)) / 1000);
    var milliseconds = Math.floor((elapsedTime % 1000) / 10);
    stopwatchElement.innerHTML = formatTime(minutes) + ':' + formatTime(seconds) + ':' + formatTime(milliseconds);
}

function formatTime(time) {
    return time.toString().padStart(2, '0');
}