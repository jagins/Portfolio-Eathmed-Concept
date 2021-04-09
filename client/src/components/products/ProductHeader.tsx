import React from 'react';

interface Props {
    name: string,
    price: number
}

function ProductHeader(props: Props) {
    return (
        <>
            <h2>{props.name}</h2>
            <h5>${props.price}</h5>
        </>
    )
}

export default ProductHeader;