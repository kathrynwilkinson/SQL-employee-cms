// Dependencies
const { prompt } = require('inquirer');
//*NOTE: best practice in future - add classes and models rather than loading database //will effect server speed
const connection = require('./config/connection');
console.log(connection);


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
            console.table(res);
        });
        init();
    };

    const searchRole = () => {
        const query = 'SELECT * FROM roles;';
        connection.query(query, (err, res) => {

            if (err) throw err;
            console.table(res);
        });
        init();
    };

    const searchDept = () => {
        const query = 'SELECT * FROM departments;';
        connection.query(query, (err, res) => {

            if (err) throw err;
            console.table(res);
        });
        init();
    };

    const addEmp = () => {
        inquirer.prompt([
            {}, {}, {}, {}
        ])
            .then((answers) => {
                connection.query(), (err, res) => {

                    if (err) throw err;
                    console.table(res);
                };
                init();
            });
    };

    const addRole = () => {
        inquirer.prompt([
            {

            },
            {

            },
            {

            },
            {

            }
        ])

            .then((answers) => {
                connection.query(), (err, res) => {

                    if (err) throw err;
                    console.table(res);
                };
                init();
            });
    };

    const addDept = () => {
        inquirer.prompt([
            {}, {}, {}, {}
        ])
            .then((answers) => {
                connection.query(), (err, res) => {

                    if (err) throw err;
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
            .then((answers) => {
                connection.query(), (err, res) => {

                    if (err) throw err;
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
            .then((answers) => {
                connection.query(), (err, res) => {

                    if (err) throw err;
                    console.table(res);
                    console.log();
                }
                init();
            });
    };

    //Call initialization function
    init();
// }) ()
