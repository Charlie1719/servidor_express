import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Todavia no entiendo muchas de las ventajas de express
// pero me gusta que tiene metodos para leer los JSONs que de otra manera
// abria que poner mas codigo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 1984;

app.use(express.static('public'));

// Aqui un ejemplo
// Ya que ahorra lineas como 
// res.writeHead(200, { 'Content-Type': 'text/html' });
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

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log('Up and up');
});