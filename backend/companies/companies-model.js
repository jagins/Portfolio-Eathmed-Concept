const db = require('../data/db-config');

function getAllCompanies()
{
    return db('companies');
}

module.exports = {
    getAllCompanies
}