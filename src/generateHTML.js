const generateCard = employee => {
    return `
        <section class="my-3" id="portfolio">
            <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
            <div class="flex-row justify-space-between">
            ${employee.name}
                <!-- Leaving this empty as we'll dynamically insert project HTML here -->
            </div>
        </section>
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