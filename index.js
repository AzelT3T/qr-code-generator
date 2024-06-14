const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const data = 'Hello, world!';  // QRコードに埋め込むデータ
  const size = '150x150';  // QRコードのサイズ
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${data}`;

  res.send(`
    <h1>QR Code Generator</h1>
    <p>Data: ${data}</p>
    <img src="${url}" alt="QR Code">
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
