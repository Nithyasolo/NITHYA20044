const images = document.querySelectorAll('.animated-image');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('visible');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('visible');
}

setInterval(showNextImage, 2000);