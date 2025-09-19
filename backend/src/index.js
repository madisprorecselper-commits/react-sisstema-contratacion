const express = require('express');
const app = express();
const port = 3000;

// Importa rutas
const routes = require('./api/endPoints');

// Middleware JSON
app.use(express.json());

// Usa las rutas
app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
