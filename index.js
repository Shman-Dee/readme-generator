//packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// an array of questions for user input
const questions = [
  //project title
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("You MUST enter a project title.");
        return false;
      }
    },
  },
  //description of project
  {
    type: "input",
    name: "description",
    message: "Type a short description of your project. (Required)",
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
      "Type a short explanation of your installation process of the project. (Required)",
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
    message: "What is the project used for? (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("You MUST enter a use case for the project");
        return false;
      }
    },
  },
  //contribution
  {
    type: "input",
    name: "contribution",
    message: "How should people contribute to this project? (Required)",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log(
          "You need to provide information on how to contribute to the project!"
        );
        return false;
      }
    },
  },
  //testing inquiry
  {
    type: "input",
    name: "testing",
    message: "How do you test this project? (Required)",
    validate: (testingInput) => {
      if (testingInput) {
        return true;
      } else {
        console.log("You need to describe how to test this project!");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "licensing",
    message: "Choose a license for your project (Required)",
    choices: [
      "Apache",
      "MIT",
      "Mozilla-Public",
      "GNU-General-Public",
      "Common-Development-and Distribution",
      "None",
    ],
    validate: (licensingInput) => {
      if (licensingInput) {
        return true;
      } else {
        console.log("You must pick a license for the project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("You must provide a GitHub username");
        return false;
      }
    },
  },
];

// a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("success on writing to file");
  });
}

//a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(userInput){
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  })
}

// Function call to initialize app
init();
