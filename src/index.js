const btn = document.querySelector(".toggle-btn");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
import languageContent from "./languageContent.js";

const sectionChars = document.querySelectorAll(".section-chars");

const displayCharactersParagraphs = (data, HTMLcollection) => {
  for (const character in data.characters) {
    data.characters[character].forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      HTMLcollection.forEach((node) => {
        if (node.id === character) {
          node.appendChild(p);
        }
      });
    });
  }
};

displayCharactersParagraphs(languageContent.fr, sectionChars);
