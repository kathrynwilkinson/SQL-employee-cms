//* Working orginal version */

// Dependencies
const { prompt } = require('inquirer'); // Load the prompt module only from the inquirer package //improves server speed
const cTable = require('console.table');
const connection = require('./config/connection'); // *NOTE: best practice in future - add classes and models rather than loading database //will effect server speed

// Inquirer Prompts to update, view, add, and delete (employees, roles + departments)
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
                    updateEmpRole();
                    break;

                // case 'Remove Employee':
                //     deleteEmp();
                //     break;

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

    const query = 'SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.title, employees.manager_id FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.dept_id = departments.id;';
    connection.query(query, (err, res) => {

        if (err) throw err;
        console.log(`\n
        ***Viewing all ${res.length} Employees*** \n`);
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

    const queryRoleChoices = 'SELECT role.title FROM role';
    connection.query(queryRoleChoices, (err, res) => {
        let roleChoices = res.map(function (res) {
            return res['title'];
        });

        const queryManagerChoices = 'SELECT managers.first_name, managers.last_name, managers.title FROM managers';
        connection.query(queryManagerChoices, (err, res) => {
            let managerChoices = res.map(function (res) {
                return res['first_name', 'last_name', 'title'];
            });

            prompt([
                { type: 'input', name: 'newEmpFirst', message: 'New employee`s first name?' },
                { type: 'input', name: 'newEmpLast', message: 'New employee`s last name?' },
                { type: 'list', name: 'newEmpRole', message: 'New employee`s role title?', choices: roleChoices },
                { type: 'list', name: 'newEmpManager', message: 'New employee`s manager?', choices: managerChoices }
            ])
                .then((answers) => {
                    const queryRoles = 'SELECT * FROM roles';
                    connection.query(queryRoles, (err, res) => {
                        if (err) throw err;
                        const role = res.find(role => roles.title === answers.newEmpRole);

                        const queryAddEmp = `INSERT INTO employees (first_name, last_name, role_id) VALUES ('${answers.newEmpFirst}', '${answers.newEmpLast}', '${role.id}';`
                        connection.query(queryAddEmp, (err, res) => {
                            if (err) throw err;
                        });
                    });

                    const queryManagers = 'SELECT * FROM managers';
                    connection.query(queryManagers, (err, res) => {
                        if (err) throw err;
                        const manager = res.find(manager => managers.title === answers.newEmpManager);

                        const queryAddEmpManager = `INSERT INTO employees (manager_id) VALUES ('${manager.id}');`
                        connection.query(queryAddEmpManager, (err, res) => {
                            if (err) throw err;
                            console.log('***New employee successfully added!***');
                        });
                    });
                });
        });
    });
    searchEmp();           //const query = `INSERT INTO employees (first_name, last_name, ,dept_id, role_id, manager_id) VALUES ('${answers.first_name}', '${answers.last_name}', ${answers.dept_id}, ${answers.role_id}, ${answers.manager_id});`;
};

const addRole = () => {
    prompt([
        { type: 'input', name: 'title', message: 'Name of New Role?' },
        { type: 'input', name: 'salary', message: 'Salary of New Role?' },
        { type: 'input', name: 'id', message: 'ID number of New Role?' },
        { type: 'input', name: 'department_name', message: 'Which department is this New Role under?' },
        { type: 'input', name: 'department_id', message: 'ID number of selected department?' }
    ])

        .then((answers) => {
            const query1 = `INSERT INTO departments (department_name, id) VALUES ('${answers.department_name}', ${answers.department_id});`;
            connection.query(query1, (err, res) => {

                if (err) throw err;
            });
            const query2 = `INSERT INTO roles (title, salary, id, department_id) VALUES ('${answers.title}', ${answers.salary}, ${answers.id}, ${answers.department_id});`;
            connection.query(query2, (err, res) => {

                if (err) throw err;
                console.log('***New role successfully added!***');
            });
            searchRole();
        });
};

const addDept = () => {
    prompt([
        { type: 'input', name: 'department_name', message: 'Name of New Department?' },
        { type: 'input', name: 'id', message: 'ID number of New Department?' }
    ])
        .then((answers) => {
            const query = `INSERT INTO departments (department_name, id) VALUES ('${answers.department_name}', ${answers.id});`;
            connection.query(query, (err, res) => {

                if (err) throw err;
                console.log('***New department successfully added!***');
            })
            searchDept();
        });
};

const updateEmpRole = () => {
    prompt([
        { type: 'input', name: 'id', message: 'Employee`s ID number?' },
        { type: 'input', name: 'role_id', message: 'Employee`s Updated Role ID number?' }
    ])
        .then((answers) => {
            const query = `UPDATE employees SET role_id = ${answers.role_id} WHERE id = ${answers.id};`;
            connection.query(query, (err, res) => {

                if (err) throw err;
                console.log('***Employee successfully updated!***');
            })
            searchEmp();
            searchRole();
        });
};

// const deleteEmp = () => {
//     const query = 'SELECT * FROM employees;';
//     connection.query(query, (err, res) => {

//         if (err) throw err;
//         console.log('***Employee successfully deleted!***');
//         console.table(res);
//     });
//     init();
// };

//Call initialization function
init();
