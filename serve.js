const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const requested = pathname === '/' ? 'index.html' : pathname.slice(1);
  const file = path.resolve(root, requested);
  if (!file.startsWith(root + path.sep) && file !== path.join(root, 'index.html')) {
    res.writeHead(403).end('Forbidden');
    return;
  }
  fs.readFile(file, (error, data) => {
    if (error) {
      res.writeHead(404).end('Not found');
      return;
    }
    const type = file.endsWith('.html') ? 'text/html; charset=utf-8' : 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
});

server.listen(8765, '127.0.0.1', () => {
  console.log('DAA Algorithm Lab is running at http://127.0.0.1:8765/');
  console.log('Press Ctrl+C to stop the server.');
});
