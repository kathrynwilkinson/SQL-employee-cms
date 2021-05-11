//role.js
const connection = require('../config/connection');
const { prompt } = require('inquirer');
const cTable = require('console.table');

module.exports = {
    searchRole: () => {
        const query = 'SELECT * FROM roles;';
        connection.query(query, (err, res) => {

            if (err) throw err;
            console.log('***Viewing all Roles***');
            console.table(res);
        });
    },

    addRole: () => {
        prompt([
            { type: 'input', name: 'title', message: 'Name of New Role?' },
            { type: 'input', name: 'salary', message: 'Salary of New Role?' },
            {
                type: 'list',
                name: 'department_name',
                message: 'Which department is this New Role under?',
                choices: []
            },
        ])

            .then((answers) => {
                const query1 = `INSERT INTO departments (department_name, id) VALUES ('${answers.department_name}'`;
                connection.query(query1, (err, res) => {

                    if (err) throw err;
                });
                const query2 = `INSERT INTO roles (title, salary, id, department_id) VALUES ('${answers.title}', ${answers.salary}`;
                connection.query(query2, (err, res) => {

                    if (err) throw err;
                    console.log('***New role successfully added!***');
                });
                searchRole();
            });
    }

};
