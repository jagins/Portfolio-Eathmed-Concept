const db = require('../data/db-config');

//returns the names of all the companies
function getAllCompanies()
{
    return db('companies');
}

function getCompanyProducts(id)
{
    return db('products').where('company_id', id)
}

module.exports = {
    getAllCompanies,
    getCompanyProducts
}