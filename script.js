var models = ["model1", "model2", /* add more models as needed */];
var definitions = ["def. model1", "def. model2", /* add more definitions as needed */];
var currentIndex = 0;
var isCardFlipped = false;

function toggleCardFlip() {
    if (!isCardFlipped) {
        flipCard();
    } else {
        hideDefinition();
        isCardFlipped = false;
    }
}

function flipCard() {
    var cardInner = document.querySelector('.card-inner');
    cardInner.style.transform = 'rotateY(180deg)';

    setTimeout(function () {
        updateCardContent();
        cardInner.style.transform = 'rotateY(0deg)';
        isCardFlipped = true;
    }, 500);
}

function updateCardContent() {
    document.getElementById('model-text').innerText = models[currentIndex];
    document.getElementById('definition-text').innerText = definitions[currentIndex];
}

function showDefinition() {
    var definitionText = document.getElementById('definition-text');
    definitionText.style.opacity = 1;
}

function hideDefinition() {
    var definitionText = document.getElementById('definition-text');
    definitionText.style.opacity = 0;
}
