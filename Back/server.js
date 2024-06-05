const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3006;

// Configurar conexión a MySQL
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Crear una ruta para obtener datos de la base de datos
app.get('/datos', (req, res) => {
  const sql = 'SELECT * FROM Alumnos';
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

// Servir archivos estáticos
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
