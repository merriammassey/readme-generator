const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
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
        name: 'installation',
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
        name: 'contribution',
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
        name: 'test',
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
        type: 'checkbox',
        name: 'license',
        message: 'Choose the approriate license for your project',
        choices: ['Apache 2.0', 'MIT', 'GNU 3.0', 'none']
      },
    { 
        type: 'input',
        name: 'github',
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

