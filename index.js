// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

/*const promptUser = ()=> {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'project title',
        message: 'What is the project title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }else {
                console.log('Please enter your project title.');
                return false;
            }
        }
    },
    
    

])
} */

// Function call to initialize app
init();

//mock data
const mockData = {
    title: 'My Title',
    description: 'Lorem ipsum',
    installationInstructions: 'to install, you must',
    usageInfo: 'use this for...',
    contributionGuidelines: 'to contribute...',
    testInstructions: 'to test...'
  }
  
  const pageHTML = generatePage(mockData);