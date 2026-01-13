var containerElement = document.querySelector('.container');
var originalElement = document.querySelector('.original');
var textElement = document.querySelector('.original-text');

textElement.addEventListener('click', function(event) {
    event.stopPropagation();

    var clone = originalElement.cloneNode(true);


    var randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    var clonedText = clone.querySelector('.original-text');

    clone.style.backgroundColor = randomColor;
    clonedText.classList.remove('can-hover');
    clonedText.textContent = `Randomized Color: #${randomColor.toUpperCase()}`;
    containerElement.appendChild(clone);
});