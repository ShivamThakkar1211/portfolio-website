const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Serve static files but exclude .html files
app.use(express.static(path.join(__dirname, 'public'), {
    extensions: ['html'], // Automatically serve .html for clean URLs
    index: false, // Prevent automatic index.html serving
}));

// Route for index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for cards page without .html
app.get('/cards', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cards.html'));
});

// Middleware to handle 404 for undefined routes
app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
