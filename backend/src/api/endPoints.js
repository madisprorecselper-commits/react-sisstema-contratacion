const express = require('express');
const router = express.Router();
const { usuario } = require('../controllers/usuarioController');

// Endpoint GET /usuario
router.get('/usuario', usuario);

module.exports = router;
