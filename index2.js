//packages needed
const inquirer = require('inquirer');
const fs = require('fs');

// import classes
const Manager = require('./lib/Manager.js')

// global variable
const teamArray = [];

// const generateHTML = require('./src/generateHTML.js');

// What kind of employee would you like to add 
// Options: Manager, Engineer, Intern

// For example, the user picked Manager
// Ask for Name
// Ask for Id
// Ask for Email
// Ask for Officenumber

// Ask if add more employee? Yes/No
// Yes ---> Goes back to type f employee question
// No ----> Generate the Team and generate the HTML


// functions
// init function --> prompt for type of employee
const init = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of employee would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: employeeInput => {
                if(employeeInput) {
                    return true;
                } else {
                    console.log('Please choose an employee role.');
                    return false;
                }
            }
        },
        
    ]).then((answer)=>{
        console.log(answer.employeeType)

        if(answer.employeeType == "Manager") {
            // call getManagerDData function
            getManagerData();

        } else if(answer.employeeType == "Engineer") {
            // call getEnginer
        }

    })
}

// getManagerData function --> asks for manager info
const getManagerData  = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
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
    ]).then((answer) => {

        // create a Manager object using the Manager class
        const newManager = new Manager(answer.managerName, answer.employeeId, answer.email, answer.officeNum)

        teamArray.push(newManager);

        console.log(newManager);

        // call promptAdd function
    })
}

// getEngineerData function --> asks for engineer info
// getInternData function --> asks for intern info
// promptAdd function
// generateHTML function ---> use fs.writeFile


// writeFile
// writeFile(filename, data, cb)

// writeFileSync
// const result = writeFileSync(filename, data)



init();