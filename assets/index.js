// Packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
// Array of questions for user input 
const questions = [
    {
        type: `input`,
        message: `what is your github username?`,
        name: `githubUsername`,
    },
    {
        type:`input`,
        message:`what is your email address?`,
        name: `email`,
    },
    {
        type:`input`,
        message:`what is your project's name?`,
        name: `projectName`,
    },
    {
       type: `input`,
       message: `Please write a short description of your project`,
       name: `projectDescription`, 
    },
    {
        type: `list`,
        message: `What kind of license should your project have?`,
        name: `license`,
        choices: [`MIT`, `GNU`,`Do What The F*ck You Want To Public License`,`The Unlicense`]
    },
    {
        type: `input`,
        message: `What command should be run to install dependencies?`,
        name: `command`,
        default: [`npm i`],
    },
    {
        type: `input`,
        message: `What command should be run to run tests?`,
        name: `commandTest`,
        default: [`npm test`],
    },
    {
        type: `input`,
        message: `What does the user need to know about using the repo?`,
        name: `userInfo`,
    },
    {
        type: `input`,
        message: `What does the user need to know about contributing to the repo?`,
        name: `userContrib`,
    },
];

// Function to write README file
function generateMarkdown(data) {
    let licenseBadge = ``;

    if (data.license === `MIT`) {
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (data.license === `GNU`) {
        licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (data.license === `Do What The F*ck You Want Public License`) {
        licenseBadge = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
    } else if (data.license === `The Unlicense`) {
        licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    }
    return `
# ${data.projectName}

${data.projectDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

to install project denpendencies run:


${data.command}

## Usage

${data.userInfo}

## License

This project is licensed under the ${data.license} License. 
${licenseBadge}

## Contributing

${data.userContrib}

## Tests

To run tests, use the following command:

${data.commandTest}

## Questions

If you have any questions, please contact me at [Github](https://github.com/${data.githubUsername}) or via email at ${data.email}.
    
    `;
}


function writeToFile(data) {
    const markdownContent = generateMarkdown(data);
    const filename = `${data.projectName.toLowerCase().split(` `).join(``)}.md`;

    fs.writeFile(filename, markdownContent, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Success!`);
        }
    });
}

// unction to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile(answers);
    }) 
    .catch(error => {
        console.log(`Error`, error);
    });
}

// Function call to initialize app
init();
