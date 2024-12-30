

  document.addEventListener("scroll", function() {
const scrollText = document.getElementById("scroll-text");
if (window.scrollY > 10) { // When the user scrolls more than 50px
    scrollText.style.opacity = '0'; // Fade out the text
} 
const elements = document.querySelectorAll(".hidden");
const windowHeight = window.innerHeight;

elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < windowHeight - 1) { // Adjust the threshold as needed
        element.classList.add("visible");
    }
});
});