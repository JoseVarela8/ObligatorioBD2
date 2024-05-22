const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3006;

// Configurar conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'joseadmin',
  database: 'PencaUCU'
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
