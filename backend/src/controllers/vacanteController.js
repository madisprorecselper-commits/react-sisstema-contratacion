const db = require('../config/db');

// CREAR VACANTE
module.exports.vacantes = (req, res) => {
  const { title, Description } = req.body;

  if (!title || !Description) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
  }

  const query = 'INSERT INTO Anuncios_vacantes_disponibles (title, Description) VALUES (?, ?)';
  db.query(query, [title, Description], (err, result) => {
    if (err) {
      console.error('Error al publicar vacante:', err);
      return res.status(500).json({ success: false, message: 'Error en el servidor' });
    }

    return res.status(201).json({
      success: true,
      message: 'Vacante publicada correctamente',
      id: result.insertId,
    });
  });
};

// OBTENER VACANTES
module.exports.obtenerVacantes = (req, res) => {
  console.log("Entró al controlador de LIMIT 6");

  const query = `SELECT * FROM Anuncios_vacantes_disponibles`;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error:', err);
      return res.status(500).json({ success: false, message: 'Error en el servidor' });
    }

    return res.json(results);
  });
};
