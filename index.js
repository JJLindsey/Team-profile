//packages needed
const inquirer = require('inquirer');
const fs = require('fs');

// import classes
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


// global variable
const teamArray = [];

const generateHTML = require('./src/generateHTML.js');

// What kind of employee would you like to add 
// Options: Manager, Engineer, Intern

// ie ,user picked Manager
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
            choices: ['Manager', 'Engineer', 'Intern', 'No more employees to add'],
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
            // call getManagerData function
            getManagerData();

        } else if(answer.employeeType == "Engineer") {
            // call getEnginer
            getEngineerData();

        } else if(answer.employeeType == "Intern") {
            getInternData();
        } else {
            console.log(teamArray)
            //call generateHTML
            const generateTeam = generateHTML(teamArray);
            console.log(generateTeam)
            fs.writeFileSync('index.html', generateTeam)
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
    ]).then((answer) => {

        // create a Manager object using the Manager class
        const newManager = new Manager(answer.managerName, answer.employeeId, answer.email, answer.officeNum)

        teamArray.push(newManager);

        console.log(newManager);

        init()
    })
}

// promptAdd function add employees
// const teamMembers = teamMemberData => {
//     console.log(`
// ======================
// Add a New Team Member
// ======================
// `);

// getEngineerData function --> asks for engineer info
const getEngineerData  = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your name? (Required)',
            validate: engInput => {
                if (engInput){
                    return true;
                } else {
                    console.log('Please enter your name.');
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
            name: 'gitHubUser',
            message: 'Please enter your GitHub username.',
            default: true
        }
    ]).then((answer) => {

        // create a Engineer object using the Engineer class
        const newEngineer = new Engineer(answer.engineerName, answer.employeeId, answer.email, answer.gitHubUser)

        teamArray.push(newEngineer);

        console.log(newEngineer);
        
        init()
    })

}  

// getInternData function --> asks for intern info
const getInternData  = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your name? (Required)',
            validate: internInput => {
                if (internInput){
                    return true;
                } else {
                    console.log('Please enter your name.');
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
            name: 'schoolInput',
            message: 'Please enter your school/univerity name.',
            default: true
        },
    ]).then((answer) => {

        // create a Manager object using the Manager class
        const newIntern = new Intern(answer.internName, answer.employeeId, answer.email, answer.schoolInput)

        teamArray.push(newIntern);

        console.log(newIntern);

        init()
    })

}

// generateHTML function ---> use fs.writeFile
//pass dat to html ()



init();