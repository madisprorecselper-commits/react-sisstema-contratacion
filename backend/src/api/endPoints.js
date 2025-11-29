const express = require('express');
const router = express.Router();

// controladores
const { login, registro } = require('../controllers/usuarioController');
const { vacantes, obtenerVacantes } = require('../controllers/vacanteController');
const { postulacion } = require('../controllers/postulacionController')

// RUTAS
router.post('/login', login);
router.post('/registro', registro);
router.post('/vacantes', vacantes);
router.post('/postulacion', postulacion);
router.get('/vacantes', obtenerVacantes);

module.exports = router;
