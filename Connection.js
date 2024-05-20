import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Fill in your MySQL username
    password: '',  // Fill in your MySQL password
    database: 'edushare'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

export default connection;
