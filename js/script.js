// Auto-slide banner
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentIndex ? "block" : "none";
  });
  currentIndex = (currentIndex + 1) % slides.length;
}

setInterval(showSlide, 3000);
showSlide();

// Form validation
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const interest = document.getElementById("interest").value;

    if (!name) {
      alert("Name cannot be empty.");
      event.preventDefault();
    } else if (!email || !email.includes("@")) {
      alert("Please enter a valid email.");
      event.preventDefault();
    } else if (!interest) {
      alert("Please select an interest.");
      event.preventDefault();
    } else {
      alert("Form submitted successfully!");
    }
  });
