import React from 'react';
import {useParams} from 'react-router-dom';
import {GET_PRODUCT_BY_ID} from '../queries/index';
import {useQuery} from '@apollo/react-hooks';

function ProductDetails()
{
    const {id} = useParams();
    const PRODUCT_BY_ID = GET_PRODUCT_BY_ID(id);
    const {loading, data, error} = useQuery(PRODUCT_BY_ID);
  
    return (
    <div>
        {loading ? <p>Loading...</p> : (
            <div>
                <h3>{data.products[0].product_name}</h3>
                <p>{data.products[0].price}</p>
            </div>
        )}
    </div>
    );
}

export default ProductDetails;