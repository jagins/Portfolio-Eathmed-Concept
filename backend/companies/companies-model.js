const db = require('../data/db-config');

//returns the names of all the companies
function getAllCompanies()
{
    return db('companies');
}

module.exports = {
    getAllCompanies
}