// server.js
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3308;

// Configurar conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',    // Cambia esto si tu base de datos está en un servidor remoto
  user: 'root',
  password: 'admin',
  database: 'PencaUCUbd'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Crear una ruta simple
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Crear una ruta para obtener datos de la base de datos
app.get('/datos', (req, res) => {
  const sql = 'SELECT * FROM tu_tabla';
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
