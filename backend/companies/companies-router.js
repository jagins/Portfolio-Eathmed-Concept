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

module.exports = router;