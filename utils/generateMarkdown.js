// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  // ![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)
  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

  ## Description 
  ${data.description}
  ## Table of Contents

  * [Description](#Description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## Contributing 
  ${data.contribution}

  ## Tests
  ${data.test}

  ## License 
  This project is license under ${data.license}

  ## Questions
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} 
`;
}

module.exports = generateMarkdown;
