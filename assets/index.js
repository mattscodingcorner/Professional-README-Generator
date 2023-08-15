// TODO: Include packages needed for this application
const inquirer = require(`inquirer`)
// TODO: Create an array of questions for user input
inquirer
    .prompt([
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
    ])  
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
