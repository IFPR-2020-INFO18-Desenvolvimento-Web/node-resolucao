const http = require('http');

const hostname = 'localhost';
const port = 3000;

const gerarHTML = texto => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site do IFPR</title>
  </head>
  <body>
    <h1>Site do IFPR</h1>
    <h2>${texto}</h2>
  </body>
  </html>
`;

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html');
  if (request.url === '/') {
    response.statusCode = 200;
    response.end(gerarHTML('Página inicial'));
  } else if (request.url === '/sobre') {
    response.statusCode = 200;
    response.end(gerarHTML('Sobre o IFPR'));
  } else if (request.url === '/contato/whatsapp') {
    response.statusCode = 200;
    response.end(gerarHTML('Contato via WhatsApp'));
  } else {
    response.statusCode = 404;
    response.end(gerarHTML('Página não encontrada'));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
