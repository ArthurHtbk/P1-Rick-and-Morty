// toggle button for language switch

const btn = document.querySelector(".toggle-btn");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
});

// hamburger menu

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
