// Ejemplo vulnerable de código TypeScript

import express from 'express';
import helmet from 'helmet';
const app = express();
app.use(helmet());
// Ejemplo de inyección de código mediante entrada del usuario
app.get('/', (req, res) => {
    let param = req.query.param;
    // Validar o sanitizar el parámetro antes de usarlo
    if (typeof param === 'string') {
        // Solo permitir caracteres alfanuméricos para evitar inyección
        const safeParam = param.replace(/[^a-z0-9]/gi, '');
        console.log(safeParam);
        // Envía una respuesta genérica en lugar de reflejar el parámetro
        res.send('Parámetro recibido y procesado de forma segura.');
    } else {
        res.status(400).send('Parámetro inválido');
    }
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
