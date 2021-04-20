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
        'Update Employee',
        'Remove Employee',
        'Finished']
}];

// Define initialization function // Pass questions object as param
const init = () => inquirer

    .prompt(questions)

    .then((answer) => {
        switch (answer.action) {
            case 'View All Employees':
                console.log('check1');
                searchEmp();
                break;

            case 'View All Roles':
                console.log('check2');
                searchRole();
                break;

            case 'View All Departments':
                console.log('check3');
                searchDept();
                break;

            case 'Add New Employee':
                console.log('check4');
                addEmp();
                break;

            case 'Add New Role':
                console.log('check5');
                addRole();
                break;

            case 'Add New Department':
                console.log('check6');
                addDept();
                break;

            case 'Update Employee':
                console.log('check7');
                updateEmp();
                break;

            case 'Remove Employee':
                console.log('check8');
                deleteEmp();
                break;

            //case 'Finished':
            //     //connection.end();
            //     break;

            //default:
                //console.log();
                //break;
       }
    });


// Define functions for each switch case
    //view employees, roles, depts; add employees, roles, depts;
    //remove employees, roles, depts; update employees, roles, depts;
const searchEmp = () => {
    //const query = "";
    connection.query(), (err, res) => {

        //console.table(res);
        //console.log();
    };
    //init();
};

const searchRole = () => {
    connection.query(), (err, res) => {

        //console.table(res);
        //console.log();
    };
    //init();
};

const searchDept = () => {
    connection.query(), (err, res) => {

        //console.table(res);
        //console.log();
    };
    //init();
};

const addEmp = () => {
    inquirer.prompt([
        {}, {}, {}, {}
    ])
    .then((answer) => {
        connection.query(), (err, res) => {

            //console.table(res);
            //console.log();
        };
        init();
    });
};

const addRole = () => {
    inquirer.prompt([
        {}, {}, {}, {}
    ])

    .then((answer) => {
        connection.query(), (err, res) => {

            console.table(res);
            console.log();
        };
        init();
    });
};

const addDept = () => {
    inquirer.prompt([
        {}, {}, {}, {}
    ])
    .then((answer) => {
        connection.query(), (err, res) => {

            console.table(res);
            console.log();
        }
        init();
    });
};

const updateEmp = () => {
    inquirer.prompt([
        {}, {}, {}, {}
    ])
    .then((answer) => {
        connection.query(), (err, res) => {

            console.table(res);
            console.log();
        }
        init();
    });
};

const deleteEmp = () => {
    inquirer.prompt([
        {}, {}, {}, {}
    ])
    .then((answer) => {
        connection.query(), (err, res) => {

            console.table(res);
            console.log();
        }
        init();
    });
};

// Call initialization function
init();
