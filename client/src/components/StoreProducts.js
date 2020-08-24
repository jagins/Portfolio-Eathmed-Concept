import React, {useState, useEffect} from 'react';
import StoreProductCard from './StoreProductCard';
import {testArray} from '../utils/testProducts';
function StoreProducts()
{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(testArray.filter(i => i.product_type === 'Flower'))
    }, [])
    return (
        <div className='product-container'>
            {products.map((product, id) => (
                <StoreProductCard key={id} product={product}/>
            ))}
           
        </div>
    )
}

export default StoreProducts;