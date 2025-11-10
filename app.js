// ===============================
// Hello World for Vercel
// ===============================
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Main route
app.get('/', (req, res) => {
  res.send('<h1>Hello World from Vercel! 🚀</h1>');
});

// Export for serverless
module.exports = app;
