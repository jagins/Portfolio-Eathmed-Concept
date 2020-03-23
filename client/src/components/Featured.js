import React from 'react';
import {GET_FEATURED} from '../queries';
import {useQuery} from '@apollo/react-hooks';
import ProductCard from '../components/ProductCard';
import '../Styles/Card.css';

function Featured()
{
    const {loading, data, error} = useQuery(GET_FEATURED);
    
    return (
        <div>
            <h3 className='title'>Featured Products</h3>
            <div className='featured-products'>
               {loading ? <p>Loading...</p> : (
                 data.products.map(product =>
                    <ProductCard
                        key={product.id}
                        name={product.product_name}
                        price={product.price}
                    />)
               )}
            </div>
        </div>
    );
}

export default Featured;