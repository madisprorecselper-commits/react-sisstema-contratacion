const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "switchyard.proxy.rlwy.net",
  user: "root",
  password: "onqsiGvVuSHxAVnNZzsEzxCPVmhoethu",
  database: "railway",
  port: 33293,
});

connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
    return;
  }
  console.log("Conectado exitosamente a la base de datos Railway");
});

module.exports = connection;
