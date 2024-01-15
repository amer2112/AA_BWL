var models = ["model1", "model2", /* add more models as needed */];
var definitions = ["def. model1", "def. model2", /* add more definitions as needed */];
var currentIndex = 0;

function flipCard() {
    var cardInner = document.querySelector('.card-inner');
    cardInner.style.transform = 'rotateY(180deg)';

    setTimeout(function () {
        updateCardContent();
        cardInner.style.transform = 'rotateY(0deg)';
    }, 500);
}

function updateCardContent() {
    currentIndex = (currentIndex + 1) % models.length;
    document.getElementById('model-text').innerText = models[currentIndex];
    document.getElementById('definition-text').innerText = definitions[currentIndex];
}
