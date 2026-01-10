var slider = document.querySelector('#slider');
var prevBtn = document.querySelector('#prev');
var nextBtn = document.querySelector('#next');
var startBtn = document.querySelector('#start');
var stopBtn = document.querySelector('#stop');

var currentIndex = 0;
var timer = null;
var imagesCount = 6;
var slides = [];

function loadImages() {
    for (var i = 0; i < imagesCount; i++) {
        var img = document.createElement('img');
        img.src = `../assets/slideshow/${i + 1}.jpg`;
        img.className = 'slide';
        if (i === 0) img.classList.add('active');
        
        slider.appendChild(img);
        slides.push(img);
    }
}

function updateSlides(newIndex) {
    slides[currentIndex].classList.remove('active');
    
    // (index + length) % length handles both directions
    currentIndex = (newIndex + slides.length) % slides.length;
    
    slides[currentIndex].classList.add('active');
}

function startSlideshow() {
    if (!timer) {
        timer = setInterval(function() {
            updateSlides(currentIndex + 1);
        }, 2000);
    }
}

function stopSlideshow() {
    clearInterval(timer);
    timer = null;
}

prevBtn.addEventListener('click', function() {
    updateSlides(currentIndex - 1);
});

nextBtn.addEventListener('click', function() {
    updateSlides(currentIndex + 1);
});

startBtn.addEventListener('click', startSlideshow);
stopBtn.addEventListener('click', stopSlideshow);

loadImages();