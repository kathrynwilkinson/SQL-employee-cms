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

    const query = 'SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.dept, managers.manager_fname, managers.manager_lname, managers.manager_title FROM employees LEFT JOIN managers ON employees.manager_id = managers.id LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON employees.dept_id = departments.id; ';
    connection.query(query, (err, res) => {

        if (err) throw err;
        console.log(`\n\n\n
        *** Viewing all ${res.length} Employees *** \n`);
        console.table(res);
    });
    init();
};

const searchRole = () => {
    const query = 'SELECT roles.id, roles.title, roles.salary, departments.dept FROM roles LEFT JOIN departments ON roles.dept_id = departments.id;';
    connection.query(query, (err, res) => {

        if (err) throw err;
        console.log(`\n\n\n
        *** Viewing all ${res.length} Roles *** \n`);
        console.table(res);
    });
    init();
};

const searchDept = () => {
    const query = 'SELECT * FROM departments';
    connection.query(query, (err, res) => {

        if (err) throw err;
        console.log(`\n\n\n
        *** Viewing all Departments *** \n`);
        console.table(res);
    });
    init();
};

const addEmp = () => {

    const queryRoleChoices = 'SELECT * FROM roles';

    connection.query(queryRoleChoices, (err, res) => {
        let roleChoices = res.map(function (res) {
            return res['title'];
        });

        prompt([
            { type: 'input', name: 'newEmpFirst', message: '\n New employee`s first name?' },
            { type: 'input', name: 'newEmpLast', message: 'New employee`s last name?' },
            {
                type: 'list',
                name: 'newEmpRole',
                message: 'New employee`s role title?',
                choices: roleChoices
            }
        ])
        .then((answers) => {

            const queryRoles = 'SELECT * FROM roles';
            // const queryManagers = 'SELECT * FROM managers WHERE manager_id = managers.id';
            // console.log(queryManagers);

            connection.query(queryRoles, (err, res) => {

                if (err) throw err;

                // const managers = res.find(managers.role_id === managers);
                const roles = res.find(roles => roles.title === answers.newEmpRole);

                // const queryAddEmpRole = `INSERT INTO roles (title, dept_id) VALUES (${answers.newEmpRole}, ${roles.dept_id});`;
                // connection.query(queryAddEmpRole), (err, res) => {
                //     if (err) throw err;

                const queryAddEmp = 'INSERT INTO employees SET ?';
                connection.query(queryAddEmp,
                    {
                        first_name: answers.newEmpFirst,
                        last_name: answers.newEmpLast,
                        dept_id: roles.dept_id,
                        role_id: roles.id,
                        // manager_id: managers.id
                    }, (err, res) => {
                        if (err) throw err
                        console.log('\n\n\n*** New Employee successfully added! ***\n')

                        searchEmp();
                    });
            });
        });
    });
};

const addRole = () => {

    const queryDeptChoices = 'SELECT * FROM departments';

    connection.query(queryDeptChoices, (err, res) => {
        let deptChoices = res.map(function (res) {
            return res['dept'];
        });

        prompt([
            { type: 'input', name: 'newRoleTitle', message: 'Name of New Role?' },
            { type: 'input', name: 'newRoleSalary', message: 'Salary of New Role?' },
            {
                type: 'list',
                name: 'newRoleDept',
                message: 'Which department is this New Role under?',
                choices: deptChoices
            }
        ])
        .then((answers) => {

            const queryDepts = 'SELECT * FROM departments';
            connection.query(queryDepts, (err, res) => {
                if (err) throw err;
                const departments = res.find(departments => departments.dept === answers.newRoleDept);

                const queryAddRole = 'INSERT INTO roles Set ?';
                connection.query(queryAddRole,
                {
                    title: answers.newRoleTitle,
                    salary: answers.newRoleSalary,
                    dept_id: departments.id
                }, (err, res) => {
                    if (err) throw err;
                    console.table(res);
                    console.log('\n\n\n*** New Role successfully added! ***\n')

                    searchRole();
                });
            });
        });
    });
};

const addDept = () => {
    prompt([
        { type: 'input', name: 'newDept', message: 'Name of New Department?' }
    ])
    .then((answers) => {
        const queryAddDept = 'INSERT INTO departments SET ?';
        connection.query(queryAddDept,
            {
                dept: answers.newDept
            }, (err, res) => {
                if (err) throw err;
                console.table(res);
                console.log('*** New Department successfully added! ***');

                searchDept();
            });
    });
};

const updateEmpRole = () => {

    const queryEmpChoices = 'SELECT CONCAT(employees.first_name, " ", employees.last_name) AS empName FROM employees';

    connection.query(queryEmpChoices, (err, res) => {
        let empChoices = res.map(function (res) {
            return res['empName'];
        });

        connection.query('SELECT roles.title FROM roles', (err, res) => {
            let roleChoices = res.map(function (res) {
                return res['title'];
            });

            prompt([
                {
                    type: 'list', name: 'updateEmp', message: 'Which employee would you like to update?',
                    choices: empChoices
                },
                {
                    type: 'list', name: 'roles', message: 'Employee`s new role?',
                    choices: roleChoices
                }
            ])
                .then((answers) => {
                    const queryRoles = 'SELECT * FROM roles';
                    connection.query(queryRoles, (err, res) => {

                        if (err) throw err;
                        const roles = res.find(roles => roles.title === answers.roles);

                        const queryEmps = 'SELECT * FROM employees';
                        connection.query(queryEmps, (err, res) => {

                            if (err) throw err;
                            let fullName = answers.updateEmp.split(' ');
                            const employees = res.find(employees => employees.first_name === fullName[0] && employees.last_name === fullName[1]);

                            const queryUpdate = 'UPDATE employees SET ? WHERE ?';
                            connection.query(queryUpdate,
                                [
                                    {
                                        role_id: roles.id,
                                    },
                                    {
                                        id: employees.id
                                    }
                                ], (err, res) => {
                                    if (err) throw err;
                                    console.table(res);
                                    console.log('\n\n\n*** Employee Role successfully udpated! ***\n')

                                    searchEmp();
                                });
                        });
                    });
                });
        });
    });
};

const deleteEmp = () => {

    const queryEmpChoices = 'SELECT CONCAT(employees.first_name, " ", employees.last_name) AS empName FROM employees';

    connection.query(queryEmpChoices, (err, res) => {
        let empChoices = res.map(function (res) {
            return res['empName'];
        });

        prompt([
            {
                type: 'list', name: 'deleteEmp', message: 'Which employee would you like to remove?',
                choices: empChoices
            }
        ])
            .then((answers) => {

                const queryEmps = 'SELECT id, first_name, last_name FROM employees';
                connection.query(queryEmps, (err, res) => {

                    if (err) throw err;
                    let fullName = answers.deleteEmp.split(' ');
                    const employees = res.find(employees => employees.first_name === fullName[0] && employees.last_name === fullName[1]);

                    const queryUpdate = 'DELETE FROM employees WHERE ?';
                    connection.query(queryUpdate,
                        {
                            id: employees.id
                        },
                        (err, res) => {
                            if (err) throw err;
                            console.table(res);
                            console.log('\n\n\n*** Employee successfully removed ***\n')

                            searchEmp();
                        });
                });
            });
    });
};


//Call initialization function
init();
