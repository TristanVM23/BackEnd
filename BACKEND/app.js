const express = require('express');
const app = express();
const path = require('path');


app.get('/circle', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'circle.html'));
});


app.get('/pythagoras', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'pythagoras.html'));
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


app.use(express.static(path.join(__dirname, 'public')));
