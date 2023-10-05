// Imports
import languageContent from "./languageContent.js";
import { toggleHandler, hamburgerHandler, displayParagraphs } from "./utils.js";

// Elements
const toggleButton = document.querySelector(".toggle-button");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const sectionChars = document.querySelectorAll(".section-chars");
const harmonSection = document.querySelectorAll(".harmon-section");

// Handle language switch
displayParagraphs(languageContent.fr.characters, sectionChars);
displayParagraphs(languageContent.fr.author.bio, harmonSection);

toggleButton.addEventListener("click", () => {
  toggleHandler(toggleButton);
  if (toggleButton.classList[1]) {
    displayParagraphs(languageContent.en.characters, sectionChars);
    displayParagraphs(languageContent.en.author.bio, harmonSection);
    console.log(languageContent.en.characters, languageContent.en.author.bio);
  } else {
    displayParagraphs(languageContent.fr.characters, sectionChars);
    displayParagraphs(languageContent.fr.author.bio, harmonSection);
    console.log(languageContent.fr.characters, languageContent.fr.author.bio);
  }
});

// Hamburger menu
hamburger.addEventListener("click", () => {
  hamburgerHandler(navLinks, "open");
});
