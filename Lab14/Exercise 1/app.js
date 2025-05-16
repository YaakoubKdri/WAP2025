import express from 'express';
import fs from 'fs';
import path from 'path';
import url from 'url';

const app = express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/image', (req, res) => {
  const imagePath = path.join(__dirname, 'files', 'NationalPark.jpg');
  res.sendFile(imagePath);
});

app.get('/pdf', (req, res) => {
  const pdfPath = path.join(__dirname, 'files', 'sample.pdf');
  res.sendFile(pdfPath);
});

app.get('/about', (req, res) => {
    const txtPath = path.join(__dirname, 'files', 'about.txt');
    fs.readFile(txtPath, 'utf-8', (err, data) => {
      if (err) return res.status(500).send('Error loading text file');
      res.send(data);
    });
  });

app.get(['/', '/home'], (req, res) => {
    res.send('Welcome to my website');
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
