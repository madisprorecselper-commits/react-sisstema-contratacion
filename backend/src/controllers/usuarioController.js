const db = require('../config/db');

//LOGIN VALIDACIÓN USUARIO      
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
//REGISTRO USUARIO
module.exports.registro = (req, res) => {
  const { UserName, PassWord, Nombre, Documento, Email, Telefono } = req.body;

  if (!UserName || !PassWord || !Nombre || !Documento || !Email || !Telefono) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
  }

  const query = `INSERT INTO usuario (UserName, PassWord, Nombre, Documento, Email, Telefono) 
                 VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(query, [UserName, PassWord, Nombre, Documento, Email, Telefono], (err, result) => {
    if (err) {
      console.error('Error al registrar usuario:', err);
      return res.status(500).json({ success: false, message: 'Error del servidor' });
    }

    return res.status(201).json({ success: true, message: 'Usuario registrado correctamente', id: result.insertId });
  });
};
