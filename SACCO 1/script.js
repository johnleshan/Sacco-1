const movingText = document.getElementById('movingText');
const movingImage = document.getElementById('movingImage');

let textPosition = 0;
let imagePosition = 0;

function moveTextAndImage() {
    textPosition += 2;
    imagePosition += 2;

    movingText.style.transform = `translateX(${textPosition}px)`;
    movingImage.style.transform = `translateX(${imagePosition}px)`;

    if (textPosition > window.innerWidth) {
        textPosition = -movingText.offsetWidth;
    }

    if (imagePosition > window.innerWidth) {
        imagePosition = -movingImage.width;
    }

    requestAnimationFrame(moveTextAndImage);
}

moveTextAndImage();
