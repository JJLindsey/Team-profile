const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateCard = employee => {
    //what type of employee 
    const managerCard = manager => {
        return `

    <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
        <img src="http://tinygraphs.com/labs/isogrids/hexa" class="card-img-top" alt="avatar">
        <div class="card-body">
            <h5 class="card-title">${employee.name}</h5>
            <p class="card-text">${employee.role}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${employee.id}</li>
            <li class="list-group-item">${employee.email}</li>
        </ul>
        <div class="card-body">
            <p class="card-link">Office Number: ${employee.officeNum}</p>
        </div>
    </div>    
        `;
    };

    const engineerCard = engineer => {
        return `

    <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
        <img src="http://tinygraphs.com/labs/isogrids/hexa" class="card-img-top" alt="avatar">
        <div class="card-body">
            <h5 class="card-title">${employee.name}</h5>
            <p class="card-text">${employee.role}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${employee.id}</li>
            <li class="list-group-item">${employee.email}</li>
        </ul>
        <div class="card-body">
            <p class="github"> GitHub: <a href="https://github.com/${employee.gitHubUser}" class="card-link"></a></p>
        </div>
    </div>    
        `;
    };

    const internCard = intern => {
        return `

    <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
        <img src="http://tinygraphs.com/labs/isogrids/hexa" class="card-img-top" alt="avatar">
        <div class="card-body">
            <h5 class="card-title">${employee.name}</h5>
            <p class="card-text">${employee.role}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${employee.id}</li>
            <li class="list-group-item">${employee.email}</li>
        </ul>
        <div class="card-body">
            <p class="school"> School: <${employee.school}"></p>
        </div>
    </div>    
        `;
    }
}



    const generateHTML = teamArray => {
            // call employee functions
    if (role === 'Manager') {
        const managerCard = generateManager(employee);

        teamArray.push(managerCard);
    }

    // call engineer function
    if (role === 'Engineer') {
        const engineerCard = generateEngineer(employee);

        teamArray.push(engineerCard);
    }

    // call intern function 
    if (role === 'Intern') {
        const internCard = generateIntern(employee);

        teamArray.push(internCard);
    }
    
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
        <link rel="stylesheet" href="../style.css">
    </head>
    <body>

        ${teamArray.map((employee) => {
            return generateCard(employee)
        })}
        
        <script src="index.js"></script>
    </body>
</html>
`
    }

    module.exports = generateHTML;