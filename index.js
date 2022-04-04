//packages needed for this application
const inquirer = require("inquirer");
const genterateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// an array of questions for user input
const questions = [
  //project title
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("You MUST enter a project title");
        return false;
      }
    },
  },
  //description of project
  {
    type: "input",
    name: "description",
    message: "Type a short description of your project",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("You MUST enter a description");
        return false;
      }
    },
  },
  //installation of project
  {
    type: "input",
    name: "installation",
    message:
      "Type a short explanation of your installation process of the project",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("You MUST enter an installation configuration");
        return false;
      }
    },
  },
  //usage for project
  {
    type: "input",
    name: "usage",
    message: "What is the project used for?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("You MUST enter a use case for the project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "How can developers contribute to this project?",
    validate: contributionInput => {
      if (contributionInput) {return true;
    }else{
      console.log('You MUST enter a contribution description for the project');
      return false;
    }
  },
  {
    type: "input",
    name: 'testing',
    message: 'How do you test this project'
  },
  {
    type: "checkbox",
    name: "licensing",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
