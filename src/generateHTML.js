const generateCard = employee => {
    return `
    <div class="card" style="width: 18rem;">
        <img src="http://tinygraphs.com/labs/isogrids/hexa">class="card-img-top" alt="avatar">
        <div class="card-body">
            <h5 class="card-title">${employee.name}</h5>
            <p class="card-text">${employee.role}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${employee.id}</li>
            <li class="list-group-item">${employee.email}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">${employee.officeNum}</a>
        </div>
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
        <link rel="stylesheet" href="/dist/style.css">
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