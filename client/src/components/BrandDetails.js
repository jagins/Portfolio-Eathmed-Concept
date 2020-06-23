import React from 'react';
import {useParams} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import ProductCard from '../components/ProductCard';
import {GET_COMPANY_PRODUCTS} from '../queries'

function BrandDetails()
{
    const {name} = useParams();
    const {loading, data, error} = useQuery(GET_COMPANY_PRODUCTS, {
        variables: {name}
    });
    console.log(data);
    return (
        <div>
            <h3>{name}</h3>
            <div>
                {loading ? <p>Loading...</p> : (
                    data.companies[0].products.map(product =>
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.product_name}
                            price={product.price}
                        />)
                )}
            </div>
        </div>
    )
}

export default BrandDetails;