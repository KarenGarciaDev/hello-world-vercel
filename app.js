// ===============================
// Hello World for Vercel
// ===============================
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World from Vercel! 🚀</h1>');
});

module.exports = app;
