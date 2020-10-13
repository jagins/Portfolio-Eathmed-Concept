import React, {useState} from 'react';
import {FaRegTrashAlt} from 'react-icons/fa';

function CartItem(props) {
    const [price, setPrice] = useState(props.item.price);
    return (
        <div>
            <img src={props.item.image} alt={props.item.product_name}/>
            <h4>{props.item.product_name}</h4>
            <h4>${price}</h4>
            <FaRegTrashAlt/>
        </div>
    );
}

export default CartItem;