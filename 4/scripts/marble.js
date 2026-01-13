var container = document.querySelector("#animation");
var marbleCount = 5;
var marbles = [];
var isPaused = false;

var firstMarble = "../assets/marbles/marble1.jpg";
var secondMarble = "../assets/marbles/marble2.jpg";

function initiate() {
    container.innerHTML = "";
    for (var i = 0; i < marbleCount; i++) {
        var img = document.createElement('img');
        img.src = firstMarble;
        container.appendChild(img);
        marbles.push(img);
    }
    
    container.addEventListener("mouseenter", function() {
        isPaused = true;
    });
    container.addEventListener("mouseleave", function() {
        isPaused = false;
    });

    startSequence();
}

function startSequence() {
    var index = 0;
    
    setInterval(function() {
        if (isPaused) return;

        var prevIndex = (index - 1 + marbleCount) % marbleCount;
        marbles[prevIndex].src = firstMarble;
        marbles[prevIndex].classList.remove('moving');

        marbles[index].src = secondMarble;
        marbles[index].classList.add('moving');

        index = (index + 1) % marbleCount;
    }, 1000);
}

initiate();