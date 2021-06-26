const generateCard = employee => {
    //what type of employee 
    // if (employee === "Manager") {
    //     return 
    // } else {
    //     (employee === "Engineer")
    //     return
    // } else if {
    //     (employee === "Intern")
    //     return
    // }

    return `
    <div class="card mb-3" style="max-width: 18rem;">
        <img src="assets/OrangeAva.png" class="card-img-top" alt="avatar">
        <div class="card-body">
            <h5 class="card-title">${employee.name}</h5>
            <p class="card-text">${employee.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
        </ul>
    </div>
        `;
};


const generateHTML = teamArray => {
    return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
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
            return generateCard(employee)
        }).join('')}
        
        </div>
    </div>    
    
    <script src="index.js"></script>
    </body>
</html>
`
}

module.exports = generateHTML;