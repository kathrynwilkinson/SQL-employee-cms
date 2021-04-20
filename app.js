// Dependencies
const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const express = require('express');
//TODO: consider adding classes and models rather than loading database //will effect server speed
const db = require('./config/connection');


// Constructors //Sequelize //*Using Schema instead
// db.Department = new Department();
// db.Employee = new Employee();
// db.Role = new Role();

// Prompts to Update, View, Add, and Delete (departments, roles + employees)
const questions = [{
    type: 'list',
    name: 'action',
    message: 'What do you want to do?',
    choices: [
        'Update Employee',
        'View All Employees',
        'View All Roles',
        'View All Departments',
        'View All Employees by Department',
        'Add New Employee',
        'Add New Role',
        'Add New Department',
        'Remove Employee',
        'Finished']
}];

//const init = () => {
    //promptuser()
    //.then(answer => {
        //switch (answer.action){

//        }
//    })
//}

//const viewEmployees = () => {
//    console.table(Employees)
    //prompt for employee names, id, role, finished
//}

//view employees, view by dept, view by manager, add employee, remove employee, update employee, update role,


// async function start() {
//     try {
//         const answers = await prompt(questions)
//         console.log(answers);
//         switch (answers.choice) {
//             case 'show all employees':
//                 const results = await db.Employee.getAllEmployees()
//                 start();
//                 break;
//             case 'show all departments':
//                 const results = await db.Department.getAllDepts()
//                 console.table(results);
//                 start();
//                 break;
//             case 'show all roles':
//                 const results = await db.Role.getAllRoles()
//                 start();
//         }
//     }
// }

// no need to use models.js if you're using my sql
