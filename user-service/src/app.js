const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;
const productServiceUrl = process.env.PRODUCT_SERVICE_URL || 'http://localhost:3002';

// Sample data
const users = [
  { id: 1, name: 'User 1 version V2.0.0 ' },
  { id: 2, name: 'User 2 version V2.0.0 ' }
];

// Middleware to parse JSON
app.use(express.json());

// GET /users
app.get('/users', async (req, res) => {
  try {
    const response = await axios.get(`${productServiceUrl}/products`);
    res.json({
      message: 'User Service',
      products: response.data,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// POST /users
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    user.name = req.body.name;
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// DELETE /users/:id
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});

app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`);
});