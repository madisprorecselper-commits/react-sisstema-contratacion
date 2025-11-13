const mysql = require("mysql2");

const connection = mysql.createPool({
  host: process.env.DB_HOST || "bezi4vq23ekf9a7bzhlp-mysql.services.clever-cloud.com",
  user: process.env.DB_USER || "u6mzm7jalmktaj1s",
  password: process.env.DB_PASS || "LHLaQkMItsfY20M766p1",
  database: process.env.DB_NAME || "bezi4vq23ekf9a7bzhlp",
  port: process.env.DB_PORT || 3306,
  connectionLimit: 10,
});

connection.getConnection((err, conn) => {
  if (err) {
    console.error("Error de conexión", err);
    return;
  }
  console.log("Conectado exitosa");
  conn.release();
});

module.exports = connection;
