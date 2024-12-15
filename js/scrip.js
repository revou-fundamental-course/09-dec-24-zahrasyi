// JavaScript for Banner Auto-Slide
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide.image');

function updateSlidePosition() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlideIndex ? 'block' : 'none';
    });
}

function showNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlidePosition();
}

// Initialize the slider
updateSlidePosition();
setInterval(showNextSlide, 3000);

// JavaScript for Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const destination = document.getElementById('destination').value.trim();

    if (!name || !email || !destination) {
        alert('Please fill out all fields.');
        event.preventDefault();
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});
