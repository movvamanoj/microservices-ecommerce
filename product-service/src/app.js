const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

// Sample data
const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' }
];

// Middleware to parse JSON
app.use(express.json());

// GET /products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET /products/:id
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// POST /products
app.post('/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /products/:id
app.put('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    product.name = req.body.name;
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// DELETE /products/:id
app.delete('/products/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(port, () => {
  console.log(`Product service listening at http://localhost:${port}`);
});
