
const util = require('util');
const mysql2 = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: 'Elephants1118!',
    database: 'employee_db',
});

// Promise wrapper
connection.query = util.promisify(connection.query);

module.exports = connection;
