import React from 'react';

function ProductCard(props)
{
    const {name, price} = props;
    return (
        <div className='card'>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}

export default ProductCard;
