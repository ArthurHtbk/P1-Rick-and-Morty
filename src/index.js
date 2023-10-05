// Imports
import languageContent from "./languageContent.js";
import { toggleHandler, hamburgerHandler, displayParagraphs } from "./utils.js";
import languageHandler from "./languageHandler.js";

// Elements
const toggleButton = document.querySelector(".toggle-button");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const charsParagraphs = document.querySelectorAll(
  ".section-chars > .paragraphs"
);
const harmonParagraphs = document.querySelectorAll(
  ".harmon-section > .paragraphs"
);

// Handle language switch
displayParagraphs(languageContent.fr.characters, charsParagraphs);
displayParagraphs(languageContent.fr.author.bio, harmonParagraphs);

toggleButton.addEventListener("click", () => {
  toggleHandler(toggleButton);
  if (toggleButton.classList[1]) {
    languageHandler(languageContent.en);
    displayParagraphs(languageContent.en.characters, charsParagraphs);
    displayParagraphs(languageContent.en.author.bio, harmonParagraphs);
  } else {
    languageHandler(languageContent.fr);
    displayParagraphs(languageContent.fr.characters, charsParagraphs);
    displayParagraphs(languageContent.fr.author.bio, harmonParagraphs);
  }
});

// Hamburger menu
hamburger.addEventListener("click", () => {
  hamburgerHandler(navLinks, "open");
});

/**
|--------------------------------------------------
| carousel
|--------------------------------------------------
*/

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".carousel-btn.btn-right");
const prevBtn = document.querySelector(".carousel-btn.btn-left");
const dotsContainer = document.querySelector(".carousel-dots");
const dots = Array.from(dotsContainer.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
  if (targetIndex === 0) {
    prevBtn.classList.add("is-hidden");
    nextBtn.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    nextBtn.classList.add("is-hidden");
    prevBtn.classList.remove("is-hidden");
  } else {
    prevBtn.classList.remove("is-hidden");
    nextBtn.classList.remove("is-hidden");
  }
};

prevBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsContainer.querySelector(".dot.current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
});

nextBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsContainer.querySelector(".dot.current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
});

dotsContainer.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsContainer.querySelector(".dot.current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);

  hideShowArrows(slides, prevBtn, nextBtn, targetIndex);
});
