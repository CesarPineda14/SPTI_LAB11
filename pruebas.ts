// Ejemplo vulnerable de código TypeScript

import express from 'express';
const app = express();

// Ejemplo de inyección de código mediante entrada del usuario
app.get('/', (req, res) => {
    let param = req.query.param;
    // Simulación de una vulnerabilidad de inyección
    eval('console.log(' + param + ')');
    res.send('Ejecución de parámetro como código!');
});

// Ejemplo de uso de una contraseña codificada en el código fuente
const adminPassword = '12345'; // Contraseña altamente insegura y hardcodeada

// Iniciar servidor en puerto 3000
app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});

// Uso inseguro de recursos de criptografía
const crypto = require('crypto');
const insecureHashFunction = crypto.createHash('md5');

// Uso inseguro de headers, susceptible a ataques como clickjacking
app.use((req, res, next) => {
    res.setHeader('X-Frame-Options', 'ALLOW-FROM http://example.com/');
    next();
});
