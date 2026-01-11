const startClock = document.querySelector("#start-clock");
const stopText = document.querySelector("p.stop");
const clockDisplay = document.querySelector('#clock p');
let clockInterval;

const updateClock = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    if (clockDisplay) {
        clockDisplay.textContent = timeString;
    }
};

startClock.addEventListener('click', () => {
    clockDisplay.style.color = 'black';
    startClock.style.display = 'none';
    stopText.style.display = 'block';
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
});

document.addEventListener('keydown', (event) => {
    if (event.altKey && event.key.toLowerCase() === 'w') {
        event.preventDefault();
        
        clearInterval(clockInterval);
        
        if (clockDisplay) clockDisplay.style.color = 'red';
        stopText.style.display = 'none';
        startClock.style.display = 'block';
    }
});