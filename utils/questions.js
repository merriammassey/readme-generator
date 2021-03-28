// TODO: Create an array of questions for user input
const questions = [
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
    {
        type: 'input',
        name: 'project description',
        message: 'Describe your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }else {
                console.log('Please enter your project description.');
                return false;
            }
        }
    },
    { //fix this
        type: 'input',
        name: 'table of contents',
        message: 'Describe your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }else {
                console.log('Please enter your project description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'Enter your installation instructions. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }else {
                console.log('Please enter your installation instructions.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use the project. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }else {
                console.log('Please enter your usage description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'Describe how to contribute to the project. (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            }else {
                console.log('Please enter your usage description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe how to run the project tests. (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            }else {
                console.log('Please enter your test instructions.');
                return false;
            }
        }
    },
    { 
        type: 'input',
        name: 'github username',
        message: 'What is your Github username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            }else {
                console.log('Please enter your Github username.');
                return false;
            }
        }
    },
    { 
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }else {
                console.log('Please enter your email.');
                return false;
            }
        }
    },
]

/*
title of my project 
Description, 
Table of Contents, 
Installation, 
Usage, 
License, 
Contributing, 
Tests, and 
Questions


/*
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README 
and a notice is added to the section of the README entitled License that explains which license the application is covered under
*/
 
/*
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/