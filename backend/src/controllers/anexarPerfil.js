const db = require('../config/db');

// GUARDAR PERFIL 
module.exports.anexarPerfil = (req, res) => {
  const { Nombre, Gmail, Number } = req.body;

  //if (!title || !Description) {
    //return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
  //}

  const query = 'INSERT INTO Ver_Perfil (Nombre, Gmail, Number) VALUES (?, ?, ?)'
  db.query(query, [Nombre, Gmail, Number], (err, result) => {
    if (err) {
      console.error('Error al insertar datos:', err);
      return res.status(500).json({ success: false, message: 'Error en el servidor' });
    }

    return res.status(201).json({
      success: true,
      message: 'Datos insertados Correctamente',
      id: result.insertId,
    });
  });
};