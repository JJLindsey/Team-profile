//const Manager = require("../lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
//const Manager = require("../lib/Manager");

//const generateCard = employee => {
    //what type of employee 
const managerCard = manager => {
    return `

    <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
        <img src="http://tinygraphs.com/labs/isogrids/hexa" class="card-img-top" alt="avatar">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <p class="card-text">${manager.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${manager.id}</li>
            <li class="list-group-item">${manager.email}</li>
        </ul>
        <div class="card-body">
            <p class="card-link">Office Number: ${manager.getOfficeNumber()}</p>
        </div>
    </div>    
    `;
}

const engineerCard = engineer => {
    return `

    <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
        <img src="http://tinygraphs.com/labs/isogrids/hexa" class="card-img-top" alt="avatar">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <p class="card-text">${engineer.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${engineer.id}</li>
            <li class="list-group-item">${engineer.email}</li>
        </ul>
        <div class="card-body">
            <p class="github"> GitHub: <a href="https://github.com/${engineer.getGithub()}" class="card-link"></a></p>
        </div>
    </div>    
    `;
}

const internCard = intern => {
    return `

    <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
        <img src="http://tinygraphs.com/labs/isogrids/hexa" class="card-img-top" alt="avatar">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <p class="card-text">${intern.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${intern.id}</li>
            <li class="list-group-item">${intern.email}</li>
        </ul>
        <div class="card-body">
            <p class="school"> School: <${intern.getSchool()}"></p>
        </div>
    </div>    
    `;
}
}




const generateHTML = teamArray => {
            // call employee functions
    // if (role === 'Manager') {
    //     const managerCard = generateManager(employee);

    //     teamArray.push(managerCard);
    // }

    // // call engineer function
    // if (role === 'Engineer') {
    //     const engineerCard = generateEngineer(employee);

    //     teamArray.push(engineerCard);
    // }

    // // call intern function 
    // if (role === 'Intern') {
    //     const internCard = generateIntern(employee);

    //     teamArray.push(internCard);
    // }

        return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://code.jquery.com/jquery-3.6.0.slim.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <div class="container">
            <div class="row justify-content-center" id="employee-cards">

            ${teamArray.map((employee) => {
                switch(employee.getRole()) {
                    case 'Manager':
                        return managerCard(employee)
                        break;
                    case 'Engineer':
                        return engineerCard(employee)
                        break;
                    case 'Intern':
                        return internCard(employee)
                        break;
                }
            //return generateCard(employee)
            }).join('')}
            </div
        </div>
        <script src="index.js"></script>
    </body>
</html>
`;
}

module.exports = generateHTML;