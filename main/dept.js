//dept.js
const connection = require('../config/connection');
const { prompt } = require('inquirer');
const cTable = require('console.table');

module.exports = {
    searchDept: () => {
        const query = 'SELECT * FROM departments;';
        connection.query(query, (err, res) => {

            if (err) throw err;
            console.log('***Viewing all Departments***');
            console.table(res);
        });
    },

    addDept: () => {
        prompt([
            { type: 'input', name: 'department_name', message: 'Name of New Department?' }
        ])
            .then((answers) => {
                const query = `INSERT INTO departments (department_name) VALUES ('${answers.department_name}');`;
                connection.query(query, (err, res) => {

                    if (err) throw err;
                    console.log('***New department successfully added!***');
                })
                searchDept();
            });
    }

};
