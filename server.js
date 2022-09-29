const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  const file = path.join(__dirname, 'todo.html');
  res.sendFile(file);
});
app.get('/canvas', (req, res) => {
  const canvas = path.join(__dirname, 'canvas.html');
  res.sendFile(canvas);
});

app.use(express.static('public'));

app.listen(3000);
