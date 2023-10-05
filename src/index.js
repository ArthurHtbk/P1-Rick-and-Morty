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
import languageContent from "./languageContent.js";

const sectionChars = document.querySelectorAll(".section-chars");
const harmonSection = document.querySelectorAll(".harmon-section");

const displayParagraphs = (data, HTMLcollection) => {
  for (const element in data) {
    data[element].forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      HTMLcollection.forEach((node) => {
        if (node.id === element) {
          node.appendChild(p);
        }
      });
    });
  }
};

displayParagraphs(languageContent.fr.characters, sectionChars);
displayParagraphs(languageContent.fr.author.bio, harmonSection);
