// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './src/routes.js';

// Crear la aplicación Express
const app = express();

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración del motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para archivos estáticos (carpeta public)
app.use('/public', express.static(path.join(__dirname, 'public')));

// Middleware para parsear JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar rutas desde src/routes
app.use('/', routes);

// Configurar el puerto
const PORT = process.env.PORT || 12000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});