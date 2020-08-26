const express = require('express');

const products = require('./products-model');
const { query } = require('express');
const { contentSecurityPolicy } = require('helmet');

const router = express.Router();

// GET /api/products
router.get('/', (req, res) => {
    if(req.query.strain_type)
    {
        let strainTypeFilter = req.query.strain_type.split(',')
        products.getAllProducts().where('product_type', req.query.product_type).andWhere('strain_type', 'in', strainTypeFilter)
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json({
            errorMessage: 'Could not retrieve products from the db'
        }))
    }
    else
    {
        products.getAllProducts().where('product_type', req.query.product_type)
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json({
            errorMessage: 'Could not retrieve products from the db'
        }))
    }
});

router.get('/:id', (req, res) => {
    products.getProductsById(req.params.id)
    .then(product => {
        if(product)
            res.status(200).json(product);
        else
            res.status(404).json({
                errorMessage: `Could not find product with id of ${req.params.id}`
            })
    })
    .catch(err => res.status(500).json({
        errorMessage: `Could not retrieve product with id of ${req.params.id}`
    }))
})

module.exports = router;