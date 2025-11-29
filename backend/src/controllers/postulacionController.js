const db = require('../config/db');


//ENVIAR POSTULACION AL ADMIN

module.exports.postulacion = (req, res) => {
  const { nombre, email, telefono, mensaje, id_vacante } = req.body;

  if (!nombre || !email || !telefono || !mensaje) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
  }

  const query = `INSERT INTO postulaciones (nombre, email, telefono, mensaje, id_vacante) VALUES (?, ?, ?, ?, ?)
`;
  db.query(query, [nombre, email, telefono, mensaje, id_vacante], (err, result) => {
    if (err) {
      console.error('Error al publicar vacante:', err);
      return res.status(500).json({ success: false, message: 'Error en el servidor' });
    }

    return res.status(201).json({
      success: true,
      message: 'SOLICITU APROBADA',
      id: result.insertId,
    });
  });
  
};





//OBTENER POSTULACION DEL ASPIRANTE 