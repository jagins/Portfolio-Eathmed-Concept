import React from 'react';

interface Props {
    image: string,
    name: string
}

function ProductImage(props: Props) {
    return (
        <div>
            <img src={props.image} alt={props.name}/>
      </div>
    )
}

export default ProductImage;