const usuarios = require('./controllers/usuarios');
const cursos = require('./controllers/cursos');


// Importación de módulos necesarios
const express = require('express');
const mongoose = require('mongoose');

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/ANGEL')
  .then(() => console.log('Conectado a MongoDB...'))
  .catch(err => console.log('No se pudo conectar con MongoDB...', err));

// Creación de la instancia de Express
const app = express();

// Middleware para parsear JSON y urlencoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// end points (recursos)
app.use('/api/usuarios', usuarios);
app.use('/api/cursos', cursos);

// Definición del puerto y puesta en marcha del servidor
const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`Api REST Ok, y ejecutándose en el puerto ${port}...`);
});
