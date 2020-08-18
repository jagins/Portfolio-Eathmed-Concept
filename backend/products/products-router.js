const express = require('express');

const products = require('./products-model');

const router = express.Router();

// GET /api/products
router.get('/', (req, res) => {
    products.getAllProducts()
    .then(products => res.status(200).json(products))
    .catch(err => res.status(500).json({
        errorMessage: 'Could not retrieve products from the db'
    }))
});

module.exports = router;