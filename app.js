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

const questions = [{
    type: 'list',
    name: 'choice',
    message: 'What do you want to do?',
    choices: ['show all employees', 'show all departments', 'show all roles', 'end app']
