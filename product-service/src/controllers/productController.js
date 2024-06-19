const getAllProducts = (req, res) => {
    res.send('Product Service: Get all products');
};

const createProduct = (req, res) => {
    res.send('Product Service: Create a new product');
};

module.exports = {
    getAllProducts,
    createProduct,
};
