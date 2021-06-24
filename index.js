//packages needed
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./src/generateHTML.js');
const { STATUS_CODES } = require('http');

//create question prompts for user input

//===========================================
const userInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'What is your team manager\'s name? (Required)',
            validate: managerInput => {
                if (managerInput){
                    return true;
                } else {
                    console.log('Please enter your manager\'s name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Please input your ID (Required)',
            validate: idInput => {
                if (idInput){
                    return true;
                } else {
                    console.log('Please provide your employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Please enter your office number.',
            default: true
        },
    ])
};

const teamMembers = teamMemberData => {
    console.log(`
======================
Add a New Team Member
======================
`);
//if there is no other team members
    if (!teamMemberData.employee) {
        teamMemberData.employee = [];
    }
    return inquirer.prompt([
        {    
            type: 'list',
            name: 'role',
            message: 'Please enter your role.(Required)',
            choices: ['Engineer', 'Intern'],
            validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log('Please enter your role.');
                return false;
            }
        },
        
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information.',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines.',
            default: true
        },
        {   type: 'input',
            name: 'tests',
            message: 'Enter testing information.',
            default: true
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput){
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        
    ]);
};

// const writeFile = () => {
    
// }

// // TODO: Create a function to initialize app
// function init() {

//     userInput().then((response) => {
//         console.log(response)

//         const genratedString  = (response);

//         console.log(generatedString)

//         fs.writeFileSync('generateHTML', generatedString)



//     })

// }

// // Function call to initialize app
// init();

module.exports = team;

// htmlgenerate code =
// <section class="my-3" id="portfolio">
// <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
// <div class="flex-row justify-space-between">
// ${employee.name}

//     <!-- Leaving this empty as we'll dynamically insert project HTML here -->
// </div>
// </section>