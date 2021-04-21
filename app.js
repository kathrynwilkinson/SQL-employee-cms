// Dependencies
const { prompt } = require('inquirer'); // Load the prompt module only from the inquirer package //improves server speed
const cTable = require('console.table');
//*NOTE: best practice in future - add classes and models rather than loading database //will effect server speed
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
    const init = () => {

        prompt(questions)

            .then((answers) => {
                switch (answers.action) {
                    case 'View All Employees':
                        searchEmp();
                        break;

                    case 'View All Roles':
                        searchRole();
                        break;

                    case 'View All Departments':
                        searchDept();
                        break;

                    case 'Add New Employee':
                        addEmp();
                        break;

                    case 'Add New Role':
                        addRole();
                        break;

                    case 'Add New Department':
                        addDept();
                        break;

                    case 'Update Employee':
                        updateEmp();
                        break;

                    case 'Remove Employee':
                        deleteEmp();
                        break;

                    case 'Finished':
                        connection.end();
                        break;
                }
            });
    }

    // Define functions for each switch case
    //view employees, roles, depts; add employees, roles, depts;
    //remove employees, roles, depts; update employees, roles, depts;
    const searchEmp = () => {

        const query = 'SELECT * FROM employees;';
        connection.query(query, (err, res) => {

            if (err) throw err;
            console.log('***Viewing all Employees***');
            console.table(res);
        });
        init();
    };

    const searchRole = () => {
        const query = 'SELECT * FROM roles;';
        connection.query(query, (err, res) => {

            if (err) throw err;
            console.log('***Viewing all Roles***');
            console.table(res);
        });
        init();
    };

    const searchDept = () => {
        const query = 'SELECT * FROM departments;';
        connection.query(query, (err, res) => {

            if (err) throw err;
            console.log('***Viewing all Departments***');
            console.table(res);
        });
        init();
    };

    const addEmp = () => {
        prompt([
            { type: 'input', name: 'first_name', message: 'New employee`s first name?'},
            { type: 'input', name: 'last_name', message: 'New employee`s last name?'},
            { type: 'input', name: 'id', message: 'New employee`s id number?'},
            { type: 'input', name: 'role_id', message: 'New employee`s role id number?' },
            { type: 'input', name: 'manager_id', message: 'New employee`s manager id number?' }
        ])
            .then((answers) => {
                const query = 'SELECT * FROM;';
                connection.query(query, (err, res) => {

                    if (err) throw err;
                    console.log('***New employee successfully added!***');
                    console.table(res);
                });
                init();
            });
    };

    const addRole = () => {
        prompt([
            { type: 'input', name: 'title', message: 'Employee`s title?' },
            { type: 'input', name: 'salary', message: 'Employee`s salary?' },
            { type: 'input', name: 'id', message: 'Employee`s role id number?' },
            { type: 'input', name: 'department_id', message: 'Employee`s department id number?' }
        ])

            .then((answers) => {
                const query = 'SELECT * FROM;';
                connection.query(query, (err, res) => {

                    if (err) throw err;
                    console.log('***New role successfully added!***');
                    console.table(res);
                });
                init();
            });
    };

    const addDept = () => {
        prompt([
            { type: 'input', name: 'department_name', message: 'New department name?' },
            { type: 'input', name: 'id', message: 'New department id number?' }
        ])
            .then((answers) => {
                const query = 'SELECT * FROM;';
                connection.query(query, (err, res) => {

                    if (err) throw err;
                    console.log('***New department successfully added!***');
                    console.table(res);
                })
                init();
            });
    };

    const updateEmp = () => {
        prompt([
            { type: 'input', name: 'title', message: 'Employee`s updated first name?' },
            { type: 'input', name: 'salary', message: 'Employee`s updated last name?' },
            { type: 'input', name: 'id', message: 'Employee`s updated id number?' },
            { type: 'input', name: 'role_id', message: 'Employee`s updated role id number?' },
            { type: 'input', name: 'manager_id', message: 'Employee`s updated manager id number?' }
        ])
            .then((answers) => {
                const query = 'SELECT * FROM;';
                connection.query(query, (err, res) => {

                    if (err) throw err;
                    console.log('***Employee successfully updated!***');
                    console.table(res);
                })
                init();
            });
    };

    const deleteEmp = () => {
        const query = 'SELECT * FROM employees;';
        connection.query(query, (err, res) => {

            if (err) throw err;
            console.log('***Employee successfully deleted!***');
            console.table(res);
        });
        init();
    };

    //Call initialization function
    init();
