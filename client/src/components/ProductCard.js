import React from 'react';
import '../Styles/Card.css';
function ProductCard(props)
{
    const {name, price} = props;
    return (
        <div className='product-card card'>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}

export default ProductCard;
