import React from 'react';
import {useHistory} from 'react-router-dom';

function ProductCard(props)
{
    const {name, price, id} = props;
    const history = useHistory();
    return (
        <div className='product-card card' onClick={() => history.push(`/store/products/${id}`)}>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}

export default ProductCard;
