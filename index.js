const inquirer = require('inquirer');
//const questions = require('./utils/questions');
const generateMarkdown = require('./utils/generateMarkdown');
//mock data
const data = {
    title: 'My Title',
    description: 'Lorem ipsum',
    installation: 'to install, you must',
    usage: 'use this for...',
    contribution: 'to contribute...',
    test: 'to test...',
    license: 'MIT 2.0',
    github: 'merriammassey',
    email: 'merriammassey@gmail.com'
  }
  
const markdown = generateMarkdown(data);


// TODO: Create a function to write README file
const writeToFile = (fileName, data)=> {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output/'+ fileName, data, err => {
          if (err) {
            reject(err);
            return;
          }
    
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
    };

// TODO: Create a function to initialize app
function init() {
    //collect info
    //return inquirer.prompt(questions)
    return data
    //render license info
    .then(renderLicenseSection)
    //return a string
    .then(data => {
        return generateMarkdown(data);
    })
    //make a file using the string
    .then(markdown => {
        return writeToFile(markdown);
    })
    //alert of success or failure
    .then(writeToFileResponse => {
        console.log(writeToFileResponse);
      })
    .catch(err => {
        console.log(err);
      });
 }

// Function call to initialize app
init();


