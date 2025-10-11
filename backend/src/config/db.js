const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'madepro_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a MySQL con XAMPP');
});

module.exports = db;