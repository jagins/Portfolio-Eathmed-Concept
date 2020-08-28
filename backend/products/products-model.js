const db = require('../data/db-config');

// get all products
function getProductsByType(product_type)
{
    return db.select(
        'products.id',
        'products.product_name',
        'products.price',
        'products.product_type',
        'products.thca',
        'products.cbd',
        'products.size',
        'products.strain_type',
        'products.image',
        'products.description',
        'companies.company_name'
    )
    .from('products')
    .where('product_type', product_type)
    .join('companies', 'products.company_id', 'companies.id')
}

function getProductsByTypeandStrain(product_type, filter)
{
    let strainFilter = filter.split(',')
    return db.select(
        'products.id',
        'products.product_name',
        'products.price',
        'products.product_type',
        'products.thca',
        'products.cbd',
        'products.size',
        'products.strain_type',
        'products.image',
        'products.description',
        'companies.company_name'
    )
    .from('products')
    .where('product_type', product_type)
    .andWhere('strain_type', 'in', strainFilter)
    .join('companies', 'products.company_id', 'companies.id')
}

function getProductsByTypeStrainandCompany(product_type, filter, company)
{
    let strainFilter = filter.split(',');
    let companies = company.split(',');
    return db.select(
        'products.id',
        'products.product_name',
        'products.price',
        'products.product_type',
        'products.thca',
        'products.cbd',
        'products.size',
        'products.strain_type',
        'products.image',
        'products.description',
        'companies.company_name'
    )
    .from('products')
    .join('companies', 'products.company_id', 'companies.id')
    .where('product_type', product_type)
    .andWhere('strain_type', 'in', strainFilter)
    .andWhere('companies.company_name', 'in', companies)
}

function getProductsByTypeandCompany(product_type, company)
{
    let companies = company.split(',');
    return db.select( 'products.id',
        'products.product_name',
        'products.price',
        'products.product_type',
        'products.thca',
        'products.cbd',
        'products.size',
        'products.strain_type',
        'products.image',
        'products.description',
        'companies.company_name'
    )
    .from('products')
    .join('companies', 'products.company_id', 'companies.id')
    .where('product_type', product_type)
    .andWhere('companies.company_name', 'in', companies)
}

// get products by id
function getProductsById(id)
{
    return db('products').where('id', id).first(); 
}

module.exports = {
    getProductsByType,
    getProductsById,
    getProductsByTypeandStrain,
    getProductsByTypeStrainandCompany,
    getProductsByTypeandCompany
}