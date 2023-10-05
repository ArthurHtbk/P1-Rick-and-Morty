const li = document.querySelectorAll(".link");
const charactersTitle = document.querySelector(".characters-title");
const authorTitle = document.querySelector(".author-title");
const heroTitle = document.querySelector(".hero-title");

const languageHandler = (data) => {
  for (let index = 0; index < li.length; index++) {
    const element = li[index];
    element.innerHTML = data.navbar[index];
  }

  charactersTitle.innerHTML = data.charactersTitle;
  authorTitle.innerHTML = data.author.title;
  heroTitle.innerHTML = data.hero;
};

export default languageHandler;
