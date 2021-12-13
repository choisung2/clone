// function slideOn () {
//     const slide = document.querySelector('.slide-wrap');
//     const item = slide.getElementsByClassName('slide-contents');
//     const firstSlide = item[0];

//     firstSlide.classList.add('onSlide');
// }

// slideOn();

// const second = setInterval(slideGo, 5000);

// function slideGo() {
//     const currentItem = document.querySelector('.onSlide');
//     currentItem.classList.remove('onSlide');

//     if (!currentItem.nextElementSibling) {
//         item[0].classList.add('onSlide');
//     } else {
//         currentItem.nextElementSibling.classList.add('onSlide');
//     }
// }

//준홍님이 고쳐주신거! 뜯어보자!!

const slide = document.querySelector('.slide-wrap');
const item = slide.querySelectorAll('.slide-contents');
const firstSlide = item[0];
firstSlide.classList.add('onSlide');

const second = setInterval(slideGo, 5000);

function slideGo() {
    const currentItem = document.querySelector('.onSlide');
    currentItem.classList.remove('onSlide');

    if (!currentItem.nextElementSibling) {
        item[0].classList.add('onSlide');
    } else {
        currentItem.nextElementSibling.classList.add('onSlide');
    }
}

const pre = document.querySelector('.slide-btn-pre');
const next = document.querySelector('.slide-btn-next');

// var slideIndex = 0; //slide index

// // HTML 로드가 끝난 후 동작
// window.onload=function(){
//   showSlides(slideIndex);

//   // Auto Move Slide
//   var sec = 3000;
//   setInterval(function(){
//     slideIndex++;
//     showSlides(slideIndex);

//   }, sec);
// }


// // Next/previous controls
// function moveSlides(n) {
//   slideIndex = slideIndex + n
//   showSlides(slideIndex);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   slideIndex = n;
//   showSlides(slideIndex);
// }

// function showSlides(n) {

//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   var size = slides.length;

//   if ((n+1) > size) {
//     slideIndex = 0; n = 0;
//   }else if (n < 0) {
//     slideIndex = (size-1);
//     n = (size-1);
//   }

//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }

//   slides[n].style.display = "block";
//   dots[n].className += " active";
// }