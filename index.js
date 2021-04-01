const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions');
const { renderLicenseBadge, renderLicenseLink, generateMarkdown } = require('./utils/generateMarkdown');
/*
const mockData = {
    title: 'My Title',
    description: 'Lorem ipsum',
    installation: 'to install, you must',
    usage: 'use this for...',
    contributions: 'to contribute...',
    tests: 'to test...',
    license: 'MIT',
    github: 'merriammassey',
    email: 'merriammassey@gmail.com'
  }
*/
//const markdown = generateMarkdown(data);


// TODO: Create a function to write README file
const writeToFile = (fileName, data)=> {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output/'+ fileName, generateMarkdown(data), err => {
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
const init = () => {
    //collect info
    inquirer.prompt(questions)
    //return object
    .then(data => {
        console.log(data);
        writeToFile('readme.md', data)
    //alert of success or failure
    .then(writeToFileResponse => {
        console.log(writeToFileResponse);
      })
    .catch(err => {
        console.log(err);
      });
    });
    //return data
    //render license info
    //.then(data => {
    //    return renderLicenseBadge(data)
    //}
    //console.log(data);
    //renderLicenseBadge(data);
    //renderLicenseLink(data);
    //return a string
    //generateMarkdown(data)
    //make a file using the string
    
 }

// Function call to initialize app
init();


