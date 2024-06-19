const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`Product Service listening at http://localhost:${port}`);
});
