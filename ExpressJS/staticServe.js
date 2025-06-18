const express = require('express');
const path = require('path');
const app = express();

const port = 4000;

// Path to your HTML files
const filePath = path.join(__dirname, 'public');
console.log(filePath);

// Serve homepage
app.get('', (req, res) => {
  res.sendFile(`${filePath}/index.html`);
});

// Serve About page
app.get('/about-us', (req, res) => {
  res.sendFile(`${filePath}/about.html`);
});

// // Serve Contact page
app.get('/contact-us', (req, res) => {
  res.sendFile(`${filePath}/contact.html`);
});



// Start server
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
