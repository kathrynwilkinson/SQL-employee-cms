
const util = require('util'); //*needed for promise
const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Elephants1118!',
    database: 'employee_db',
});

// Promise wrapper
connection.query = util.promisify(connection.query);
console.log('successful connection');

module.exports = connection;
