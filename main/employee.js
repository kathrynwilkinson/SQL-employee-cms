//employee.js
const connection = require('../config/connection');
const { prompt } = require('inquirer');
const cTable = require('console.table');

module.exports = {

    searchEmp: () => {

        const query = 'SELECT * FROM employees;';
        connection.query(query, async (err, res) => {

            if (err) throw err;
            console.log('***Viewing all Employees***');
            console.table(res);
        });
    },

    addEmp: async () => {
        try {
            prompt([
                {
                    type: 'input',
                    name: 'empName',
                    message: 'New employee`s full name?'
                }
            ])
                .then(await (answers) => {

                    const queryDept = 'SELECT department_name FROM departments;';

                    connection.query(queryDept, async (err, res) => {
                        let deptChoices = await res.map(function (res) {
                            return res['department_name'];

                })



            connection.query(queryDept, async (err, res) => {
                let deptChoices = await res.map(function (res) {
                    return res['department_name'];
                });
                prompt([
                    {
                        type: 'list',
                        name: 'empDept',
                        message: 'New employee`s dept?',
                        choices: deptChoices
                    }
                ])
                    .then((answers) => {
                        connection.query = 'SELECT * FROM departments', async (err, res) => {
                            if (err) throw err;
                            const depts = res.find(depts => departments.department_name === answers.empDept);

                            connection.query(`INSERT INTO employees (full_name, dept_id) VALUES ('${answers.empName}', '${departments.id}'`);
                        },
                            (err, res) => {
                                if (err) throw err;
                            }
                    });
            });

            const queryRoles = 'SELECT roles.title FROM roles;';

            connection.query(queryRoles, async (err, res) => {
                let roleChoices = await res.map(function (res) {
                    return res['title'];
                });
                prompt([
                    {
                        type: 'list',
                        name: 'empRole',
                        message: 'New employee`s role?',
                        choices: roleChoices
                    }
                ])
                    .then((answers) => {
                        connection.query = 'SELECT * FROM roles', async (err, res) => {
                            if (err) throw err;
                            const roles = res.find(roles => roles.title === answers.empRole);

                            connection.query(`INSERT INTO employees (role_id) VALUES ('${answers.empRole}'`);
                        },
                            (err, res) => {
                                if (err) throw err;
                            }
                    });
            });

            const queryManagers = 'SELECT managers.title FROM managers;';

            connection.query(queryManagers, async (err, res) => {
                let managerChoices = await res.map(function (res) {
                    return res['title'];
                });
                prompt([
                    {
                        type: 'list',
                        name: 'empManager',
                        message: 'New employee`s manager?',
                        choices: managerChoices
                    }
                ])
                    .then((answers) => {

                        connection.query = 'SELECT * FROM managers', async (err, res) => {
                            if (err) throw err;
                            const managers = await res.find(managers => managers.title === answers.empManager);

                            connection.query(`INSERT INTO employees (manager_id) VALUES ('${answers.empManager}')`);
                        },

                            (err, res) => {

                                if (err) throw err;
                                console.log('***New employee successfully added!***');
                            }
                    });
            })
        } catch (err) {
            console.log(err);
        }
    }


        // updateEmpRole: () => {
        //     //select employee to update

        //     prompt([
        //         { type: 'input', name: 'full_name', message: 'Which employee would you like to update?' },
        //         { type: 'input', name: 'role_id', message: 'Employee`s Updated Role ID number?' }
        //     ])
        //         .then((answers) => {
        //             const query = `UPDATE employees SET role_id = ${answers.role_id} WHERE id = ${answers.id};`;
        //             connection.query(query, (err, res) => {

        //                 if (err) throw err;
        //                 console.log('***Employee successfully updated!***');
        //             })
        //             searchEmp();
        //             searchRole();
        //         });
        // }

        // const deleteEmp = () => {
        //     const query = 'SELECT * FROM employees;';
        //     connection.query(query, (err, res) => {

        //         if (err) throw err;
        //         console.log('***Employee successfully deleted!***');
        //         console.table(res);
        //     });
        // };


};
