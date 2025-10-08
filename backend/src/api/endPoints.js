const express = require('express');
const router = express.Router();
const { login, registro } = require('../controllers/usuarioController'); 

router.post('/login', login);
router.post('/registro', registro)
//router.post('/crearCurriculum', crearCurriculum)
//router.post('/vacanteDisponible', vacanteDisponible)

module.exports = router;

