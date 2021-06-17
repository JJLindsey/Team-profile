const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, GitHub){
        super(name, id, email);
        this.GitHub = GitHub;
    }

    getGithub () {
        return this.GitHub;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;