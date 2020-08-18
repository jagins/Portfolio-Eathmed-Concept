const express = require('express');

const companies = require('./companies-model');

const router = express.Router();

// GET /api/companies
router.get('/', (req, res) => {
    companies.getAllCompanies()
    .then(companies => res.status(200).json(companies))
    .catch(err => res.status(500).json({
        errorMessage: 'Could not retrieve companies from the db'
    }))
});
// GET /api/company/:id/prodcts
router.get('/:id/products', (req, res) => {
    companies.getCompanyProducts(req.params.id)
    .then(products => {
        if(products.length > 0)
            res.status(200).json(products);
        else
            res.status(404).json({
                errorMessage: `No products found with a company with id of ${req.params.id}`
            })
    })
    .catch(err => res.status(500).json({
        errorMessage: `Could not retrieve products with a company id of ${req.params.id}`
    }))
})

module.exports = router;