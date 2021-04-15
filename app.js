// set dependencies
const { prompt } = require('inquirer');
const db = require('./config/connection');
const Department = require('./models/department');
const Department = require('./models/role');
const Department = require('./models/employee');

// constructors
db.Department = new Department;
db.Employee = new Employee;
db.Role = new Role;

// prompts to add, view, update, and delete (departments, roles + employees)
const questions = [{
    type: 'list',
    name: 'choice',
    message: 'What do you want to do?',
    choices: ['show all employees', 'show all departments', 'show all roles', 'end app']
}];

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
