import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;

  try {
    if (url === '/image' && method === 'GET') {
        const imagePath = path.join(__dirname, 'files', 'NationalPark.jpg');
        const imageData = await fs.readFile(imagePath);
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(imageData);
      }else if ((url === '/' || url === '/home') && method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to my website');
    }    

    else if (url === '/pdf' && method === 'GET') {
      const pdfPath = path.join(__dirname, 'files', 'sample.pdf');
      const pdfData = await fs.readFile(pdfPath);
      res.writeHead(200, { 'Content-Type': 'application/pdf' });
      res.end(pdfData);
    }

    else if (url === '/about' && method === 'GET') {
      const txtPath = path.join(__dirname, 'files', 'about.txt');
      const txtData = await fs.readFile(txtPath);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(txtData);
    }

    else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
    console.error(err);
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
