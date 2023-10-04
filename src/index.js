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

// console.log(languageContent.fr.characters.rickSanchez);
