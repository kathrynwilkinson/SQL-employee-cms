// Dependencies
const inquirer = require('inquirer');
const mysql2 = require('mysql2');
//TODO: consider adding classes and models rather than loading database //will effect server speed
const connection = require('./config/connection');


// Prompts to Update, View, Add, and Delete (departments, roles + employees)
const questions = [{
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
        'View All Employees',
        'View All Roles',
        'View All Departments',
        'Add New Employee',
        'Add New Role',
        'Add New Department',
        'Remove Employee',
        'Finished']
}];

const init = () => {
    inquirer.prompt(questions);

    //     .then(answer => {
    //         switch (answer.action){

    //        }
    //    })
};



//const viewEmployees = () => {
//    console.table(Employees)
    //prompt for employee names, id, role, finished
//}

//view employees, view by dept, view by manager, add employee, remove employee, update employee, update role,

init();
