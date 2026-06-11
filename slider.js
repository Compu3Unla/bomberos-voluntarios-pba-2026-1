const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function updateSlider() {
    slides.style.transform =
        `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= slide.length) {
        currentIndex = 0;
    }

    updateSlider();

});

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slide.length - 1;
    }

    updateSlider();

});

setInterval(() => {

    currentIndex++;

    if (currentIndex >= slide.length) {
        currentIndex = 0;
    }

    updateSlider();

}, 5000);