const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.use(express.json());
app.use('/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Product Service Running');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Product service listening on port ${PORT}`);
});
