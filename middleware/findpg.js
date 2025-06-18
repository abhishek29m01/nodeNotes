const express = require('express');
const requestFilter = require('./requestFilter'); // Correct path if both are at same level

const app = express();
const port = 3000;

app.get('/filteredPG', requestFilter, (req, res) => {
    res.send(`City: ${req.city} and Category: ${req.category}`);
});

app.listen(port, () => {
    console.log(`Listening at: http://localhost:${port}`);
});
