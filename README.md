# Rick & Morty homage project

Welcome to our Rick & Morty homage project! This project serves as a demonstration of a typical project using the HTML/CSS/vanilla JavaScript stack. It includes features like language switching, a hamburger menu, a carousel, and interactive content display. Here's a breakdown of the project structure and its components:

## Project Structure

- **.husky/**: Contains Husky configuration files for pre-commit hooks.
- **assets/**: This directory stores project assets like images and fonts.
- **src/**: Contains JavaScript and CSS files.
  - **index.js**: The main JavaScript file that handles various functionalities, including language switching and carousel.
  - **languageContent.js**: Contains plain data for different languages.
  - **languageHandler.js**: A module for handling language-related changes.
  - **reset.css**: A CSS reset file for consistent styling.
  - **styles.css**: Project-specific CSS styles.
  - **utils.js**: Utility functions used throughout the project.
- **.gitignore**: Specifies which files and directories should be ignored by Git.
- **index.html**: The main HTML file that displays the project content.
- **package-lock.json**: A generated file used to lock package versions for npm dependencies.
- **package.json**: Contains metadata about the project and lists npm packages used in the project.

## Usage

- `git clone git@github.com:ArthurHtbk/P1-Rick-and-Morty.git`: installs the project locally on your machine.
- `npm install`: installs dependencies.
- `npm run validate`: runs HTML linter (fired automatically on every commit).

## JavaScript Files Overview

### `index.js`

This file serves as the main entry point for the project. It imports several functions and modules to handle various aspects of the project, including language switching, hamburger menu behavior, and carousel functionality.

### `languageHandler.js`

This module handles language-specific changes in the project. It updates text content in the navigation bar and titles based on the selected language.

### `utils.js`

This module contains utility functions used throughout the project. Functions like `toggleHandler`, `hamburgerHandler`, `injectParagraphs`, `createParagraphs`, `addButton`, `removeChildren`, `displayParagraphs`, and `textHandler` are defined here to help with DOM manipulation, content display, and interactivity.

## About the Project

This project is an example created by the Toulouse JavaScript instructors team, Arthur and Cyrille, at the Wild Code School. It's intended to showcase what students can achieve using the HTML/CSS/vanilla JavaScript stack within the two-and-a-half-week project timeframe. Additionally, Husky has been set up to run a pre-commit hook that checks HTML code quality using the w3c-html-validator, ensuring code quality and standards adherence.

Feel free to explore and use this project as a reference for your own projects or as a learning resource. If you have any questions or need further assistance, please don't hesitate to reach out to the project authors.

Enjoy exploring our Rick & Morty homage project!
