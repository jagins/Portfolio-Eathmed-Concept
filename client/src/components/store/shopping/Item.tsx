import React from 'react';

interface Props {
    title: string,
    amount: string
}

function Item(props: Props) {
    return (
        <div className='line-item'>
            <p>{props.title}</p>
            <p>${props.amount}</p>
        </div>
    )
}

export default Item;