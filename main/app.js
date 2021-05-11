// External js files
// const path = require('path');
const employee = require('./employee');
const role = require('./role');
const dept = require('./dept');

// const  { searchEmp, addEmp, /*updateEmpRole, deleteEmp*/ } from './employee.js';
// const { searchRole, addRole, /*updateRoleRole, deleteRole*/ } from './role.js';
// const { searchDept, addDept, /*updateDept, deleteDept*/ } from './dept.js';

// Dependencies
const { prompt } = require('inquirer'); // Load the prompt module only from the inquirer package
const cTable = require('console.table');
const connection = require('../config/connection'); //*NOTE: best practice in future - add classes and models rather than loading database //will effect server speed

// Inquirer Prompts to update, view, add, and delete (employees, roles + departments)
const questions = [{
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
        'View All Employees',
        'View Employees by Manager',
        'View All Roles',
        'View All Departments',
        'Add New Employee',
        'Add New Role',
        'Add New Department',
        'Update Employee',
        'Update Employee Role',
        'Update Role',
        'Update Department',
        'Remove Employee',
        'Remove Role',
        'Remove Department',
        'Finished']
}];

// Define initialization function
const init = async () => {
    try {
        const answers = await prompt(questions)
        console.log(answers);
        switch (answers.action) {
            case 'View All Employees':
                employee.searchEmp();
                init();
                break;

            // case 'View Employees by Manager':
            //     searchEmpByManager();
            //     init();
            //     break;

            case 'View All Roles':
                role.searchRole();
                init();
                break;

            case 'View All Departments':
                dept.searchDept();
                init();
                break;

            case 'Add New Employee':
                employee.addEmp();
                employee.searchEmp();
                break;

            case 'Add New Role':
                role.addRole();
                init();
                break;

            case 'Add New Department':
                dept.addDept();
                init();
                break;

            case 'Update Employee':
                employee.updateEmp();
                init();
                break;

            case 'Update Employee Role':
                role.updateEmpRole();
                init();
                break;

            case 'Remove Employee':
                employee.deleteEmp();
                init();
                break;

            case 'Remove Role':
                role.deleteRole();
                init();
                break;

            case 'Remove Department':
                dept.deleteDept();
                init();
                break;


            case 'Finished':
                connection.end();
                break;
        }

    } catch (err) {
        console.log(err);
    }
};

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected`);
    init();
});

// //Call initialization function
