// ===============================
// Hello World for Vercel
// ===============================
const express = require('express');
const app = express();

// Middleware to parse JSON (optional)
app.use(express.json());

// Main route
app.get('/', (req, res) => {
  res.send('<h1>Hello World from Vercel! 🚀</h1>');
});

// Export the app so Vercel can use it as a handler
module.exports = app;
