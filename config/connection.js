
//const util = require('util'); //*needed for promise
const mysql = require('mysql'); //*needed to create connection

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Elephants1118!',
    database: 'employee_db',
});

// Promise wrapper
// don't replace built in methods with your own methods
// mysql2 is promise based //don't need to replace query method
// connection.query = util.promisify(connection.query);

module.exports = connection;
