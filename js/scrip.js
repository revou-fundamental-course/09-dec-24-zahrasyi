// JavaScript for contact form validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk disubmit secara langsung

    // Ambil input form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const interest = document.getElementById("interest").value;

    // Validasi input form
    if (name === "" || email === "" || interest === "") {
        alert("Please fill out all fields.");
        return; // Jika ada yang kosong, hentikan proses
    }

    // Menampilkan pesan sukses jika semua field terisi dengan benar
    alert("Thank you for contacting us, " + name + "! We'll get back to you shortly.");
    
    // Reset form setelah submit
    document.getElementById("contact-form").reset();
});

// JavaScript for interactive effect (example: changing background color of the header on scroll)
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#003d48"; // Menjadi warna lebih gelap saat scroll
    } else {
        header.style.backgroundColor = "#005f73"; // Warna awal
    }
});

// JavaScript for smooth scrolling on navigation link click
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1); // Ambil ID dari href
        const targetElement = document.getElementById(targetId); // Cari elemen berdasarkan ID

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Menyesuaikan scroll dengan jarak atas
            behavior: "smooth" // Efek scroll halus
        });
    });
});


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel .slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function moveSlide(step) {
    currentSlide += step;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // kembali ke slide terakhir
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // kembali ke slide pertama
    }
    showSlide(currentSlide);
}

// Tampilkan slide pertama saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
});
