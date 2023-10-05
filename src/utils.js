const toggleHandler = (element) => {
  element.classList.toggle("active");
};

const hamburgerHandler = (element, string) => {
  element.classList.toggle(string);
};

const injectParagraphs = (tab, htmlElement, string) => {
  tab.forEach((node) => {
    if (node.parentElement.id === string) {
      node.appendChild(htmlElement);
    }
  });
};

const createParagraphs = (tab, string, obj) => {
  obj[string].forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    injectParagraphs(tab, p, string);
  });
};

const addButton = (section) => {
  const button = document.createElement("button");
  button.textContent = "+";
  section.appendChild(button);
};

const removeChildren = (element) => {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
};

const displayParagraphs = (object, htmlCollection) => {
  htmlCollection.forEach((element) => {
    removeChildren(element);
  });
  for (const element in object) {
    createParagraphs(htmlCollection, element, object);
  }
  htmlCollection.forEach((element) => {
    addButton(element);
  });
};

const textHandler = (element) => {
  element.forEach((el) => {
    el.addEventListener("click", (event) => {
      const button = event.target;
      if (button.tagName === "BUTTON") {
        const paragraphs = el.querySelectorAll("p");
        if (button.classList.contains("display")) {
          button.classList.remove("display");
          button.innerText = "+";
          for (const p of paragraphs) {
            p.classList.remove("show");
          }
        } else {
          button.classList.add("display");
          button.innerText = "-";
          for (const p of paragraphs) {
            p.classList.add("show");
          }
        }
      }
    });
  });
}

export { toggleHandler, hamburgerHandler, displayParagraphs, textHandler };
