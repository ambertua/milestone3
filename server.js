const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Mock database
let users = [];
let carts = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Login endpoint
app.post('/path-to-backend-login-endpoint', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true, message: 'Logged in successfully' });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});

// Add product to cart
app.post('/add-to-cart', (req, res) => {
    const { username, product } = req.body;

    if (!carts[username]) {
        carts[username] = [];
    }

    carts[username].push(product);
    res.json({ success: true, message: 'Product added to cart', cart: carts[username] });
});

// Fetch cart
app.get('/get-cart/:username', (req, res) => {
    res.json({ cart: carts[req.params.username] || [] });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
