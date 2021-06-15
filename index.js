//packages needed
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./src/generateHTML.js')

//create question prompts for user input
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
                    console.log('Please enter your mamager\'s name.');
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
//if there is np other team members
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
            type: 'checkbox',
            name: 'license',
            message: 'Please choose a license for your read me. Check all that apply.',
            choices: ['General Public License', 'Apache 2.0', 'MIT license', 'ISC license']
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