// Ejemplo vulnerable de código TypeScript

import express from 'express';
import helmet from 'helmet';
const app = express();

import cookieParser from 'cookie-parser';
import csurf from 'csurf';

// Middlewares básicos
app.use(express.json());
app.use(helmet());
app.use(cookieParser());


// Configuración de CSRF
const csrfProtection = csurf({ cookie: true });



// Ejemplo de inyección de código mediante entrada del usuario
app.get('/', csrfProtection,(req, res) => {
    // Enviar el token CSRF al cliente, por ejemplo, dentro de un formulario HTML
    res.send(`<form action="/submit" method="POST">
                <input type="hidden" name="_csrf" value="${req.csrfToken()}">
                <button type="submit">Enviar</button>
              </form>`);
});

app.post('/submit', csrfProtection, (req, res) => {
    res.send('Datos procesados con seguridad');
});

// Ejemplo de uso de una contraseña codificada en el código fuente
const adminPassword = '12345'; // Contraseña altamente insegura y hardcodeada

// Iniciar servidor en puerto 3000
app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});




