import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Configuración de rutas para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 1984;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('<h1>Bienvenido al servidor Express</h1>');
});

app.get('/bienvenida', (req, res) => {
    res.send('Esto no es una página html');
});

app.get('/otraBienvenida', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bienvenida.html'));
});

app.use(express.json());

app.post('/api/otro', (req, res) => {
console.log('El cuerpo de la petición: ', req.body );
res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log('Up and up');
});