const express = require('express');

const products = require('./products-model');

const router = express.Router();

// GET /api/products
//Endpoint for getting all products expects a query string to filter out by product type by default since front end requries it to start
//if strain_type is in the query as well it can more than 1 seperated by a comma
router.get('/', (req, res) => 
{
    if(req.query.strain_type && req.query.company_name)
    {
        products.getProductsByTypeStrainandCompany(req.query.product_type, req.query.strain_type, req.query.company_name)
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json({errorMessage: 'Could not retrieve products from the db'}))
    }   
    else if(req.query.strain_type)
    {
        products.getProductsByTypeandStrain(req.query.product_type, req.query.strain_type)
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json({errorMessage: 'Could not retrieve products from the db'}))
    }
    else if(req.query.company_name)
    {
        products.getProductsByTypeandCompany(req.query.product_type, req.query.company_name)
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json({errorMessage: 'Could not retrieve products from the db' }))
    }
    else
    {
        products.getProductsByType(req.query.product_type)
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json({errorMessage: 'Could not retrieve products from the db'}))
    }
});

// GET /api/products/:id
router.get('/:id', (req, res) => 
{
    products.getProductsById(req.params.id)
    .then(product => 
    {
        if(product)
            res.status(200).json(product);
        else
            res.status(404).json({errorMessage: `Could not find product with id of ${req.params.id}`})
    })
    .catch(err => res.status(500).json({errorMessage: `Could not retrieve product with id of ${req.params.id}`}))
})

module.exports = router;