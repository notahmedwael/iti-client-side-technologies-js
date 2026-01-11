const startClock = document.querySelector("#start-clock");
const stopText = document.querySelector("p.stop");
let clockInterval;

const updateClock = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const clockDisplay = document.querySelector('#clock p');
    
    if (clockDisplay) {
        clockDisplay.textContent = timeString;
    }
};

startClock.addEventListener('click', () => {
    startClock.style.display = 'none';
    stopText.style.display = 'block';
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
}, { once: true });

document.addEventListener('keydown', (event) => {
    if (event.altKey && event.key.toLowerCase() === 'w') {
        event.preventDefault();
        
        clearInterval(clockInterval);
        console.log("Clock stopped via Alt + W");
        
        const clockDisplay = document.querySelector('#clock p');
        if (clockDisplay) clockDisplay.style.color = 'red';
        stopText.style.display = 'none';
    }
});