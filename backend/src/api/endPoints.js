const express = require('express');
const router = express.Router();

// controladores
const { login, registro } = require('../controllers/usuarioController');
const { vacantes, obtenerVacantes } = require('../controllers/vacanteController');
const { postulacion, obtenerPostulaciones } = require('../controllers/postulacionController')
const { anexarPerfil } = require('../controllers/anexarPerfil')

// RUTAS
router.post('/login', login);
router.post('/registro', registro);
router.post('/vacantes', vacantes);
router.post('/postulacion', postulacion);
router.post('/anexar-perfil', anexarPerfil);
router.get('/vacantes', obtenerVacantes);
router.get('/obtenerPostulaciones', obtenerPostulaciones);

module.exports = router;
