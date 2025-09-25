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

module.exports.login = (req, res) => {
  const { UserName, PassWord } = req.body;

  if (!UserName || !PassWord) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
  }

  const query = 'SELECT * FROM usuario WHERE UserName = ? AND PassWord = ? LIMIT 1';
  db.query(query, [UserName, PassWord], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Error del servidor' });
    }

    if (results.length > 0) {
      return res.json({ success: true, message: 'Login correcto' });
    } else {
      return res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
    }
  });

};

