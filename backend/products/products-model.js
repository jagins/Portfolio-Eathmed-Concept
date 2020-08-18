const db = require('../data/db-config');

// get all products
function getAllProducts()
{
    return db('products')
}

// get products by id
function getProductsById(id)
{
    return db('products').where('id', id).first(); 
}

module.exports = {
    getAllProducts,
    getProductsById
}