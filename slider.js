const sliderContainer = document.querySelector('div.slider-container');
const slides = sliderContainer.querySelectorAll('.slide');
const bottomIndicators = sliderContainer.querySelectorAll('.dot');

const previousSlide = sliderContainer.querySelector('div.nav-arrow.previous');
const nextSlide = sliderContainer.querySelector('div.nav-arrow.next');

let activeSlide = 1;

const switchSlides = function switchToSlide (slideNumber) {
    if (slideNumber > slides.length) slideNumber = 1;
    if (slideNumber < 1) slideNumber = slides.length;
    hideActiveSlide();
    unselectIndicator();
    showSlide(slideNumber);
    selectIndicator(slideNumber);
    activeSlide = slideNumber;
}

const hideActiveSlide = function hideActiveSlide () {
    slides[activeSlide - 1].style.display = 'none';
}

const showSlide = function showSlide (slideNumber) {
    slides[slideNumber - 1].style.display = 'block';
}

const unselectIndicator = function unselectActiveIndicator () {
    bottomIndicators[activeSlide - 1].classList.remove('selected');
}

const selectIndicator = function selectIndicatorAccordingToSlide (slideNumber) {
    bottomIndicators[slideNumber - 1].classList.add('selected');
}



previousSlide.addEventListener('click', () => {
    switchSlides(activeSlide - 1);
})

nextSlide.addEventListener('click', () => {
    switchSlides(activeSlide + 1);
})

for (let [i, dot] of bottomIndicators.entries()) {
    dot.addEventListener('click', () => {
        switchSlides(i + 1);
    })
}

switchSlides(activeSlide);

setInterval(() => {
    switchSlides(activeSlide + 1);
}, 5000);
