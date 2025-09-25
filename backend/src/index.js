const express = require('express');
const cors = require('cors');
const routes = require('./api/endPoints');

const app = express();

app.use(cors({ origin: 'http://localhost:5173' })); 
app.use(express.json());
app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => console.log("Servidor escuchando en http://localhost:${PORT}"));