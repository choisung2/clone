const slideItem = document.querySelectorAll('.slide-contents');
let sliderTimer = setInterval(slideGo, 5000);
let currentIndex = 0;

window.onload = () => {
  slideItem[currentIndex].classList.add('onSlide');
}

function slideGo() {
    const currentItem = document.querySelector('.onSlide');
    currentItem.classList.remove('onSlide');

    if (!currentItem.nextElementSibling) {
        slideItem[0].classList.add('onSlide');
    } else {
        currentItem.nextElementSibling.classList.add('onSlide');
    }
}

function slidePrev() {
    const currentItem = document.querySelector('.onSlide');
    currentItem.classList.remove('onSlide');

    if (!currentItem.previousElementSibling) {
        slideItem[4].classList.add('onSlide');
    } else {
        currentItem.previousElementSibling.classList.add('onSlide');
    }
}

const prevBtn = document.querySelector('.slide-btn-pre');
const nextBtn = document.querySelector('.slide-btn-next');

prevBtn.addEventListener('click', () => {
    slidePrev()
    clearInterval(sliderTimer);
    sliderTimer = setInterval(slideGo, 5000);
})

nextBtn.addEventListener('click', () => {
    slideGo()
    clearInterval(sliderTimer);
    sliderTimer = setInterval(slideGo, 5000);
})