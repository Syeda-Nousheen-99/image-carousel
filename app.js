let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel img').length;
const dotsContainer = document.querySelector('.carousel-dots');

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const slideWidth = document.querySelector('.carousel img').clientWidth;
    carousel.style.transform = `translateX(${-index * slideWidth}px)`;

    // Highlight the corresponding dot
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Create dots based on the number of slides
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
}

// Automatic slide every 3 seconds
setInterval(nextSlide, 3000);