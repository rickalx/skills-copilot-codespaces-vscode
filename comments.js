// Create web server
const http = require('http');

// Crear un servidor HTTP básico
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Hola desde mi servidor web!');
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
