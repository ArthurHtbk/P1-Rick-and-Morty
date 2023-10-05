const toggleHandler = (element) => {
  element.classList.toggle("active");
};

const hamburgerHandler = (element, string) => {
  element.classList.toggle(string);
};

const injectParagraphs = (tab, htmlElement, string) => {
  tab.forEach((node) => {
    if (node.id === string) {
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

const displayParagraphs = (object, htmlCollection) => {
  for (const element in object) {
    createParagraphs(htmlCollection, element, object);
  }
  htmlCollection.forEach((element) => {
    addButton(element);
  });
};

export { toggleHandler, hamburgerHandler, displayParagraphs };
