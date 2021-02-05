import React, {useState} from 'react';
import {FaRegTrashAlt} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {increaseCartItem, decreaseCartItem} from '../actions';

function CartItem(props) {
    const increase = () => {
        props.increaseCartItem(props.item)
    }
    const decrease = () => {
        props.decreaseCartItem(props.item);
    }
    return (
        <div className='cart-item'>
            <div className='cart-item-header'>
                <img src={props.item.image} alt={props.item.product_name}/>
                <h4 className='product-name'>{props.item.product_name}</h4>
            </div>
            
            <div className='cart-item-bottom'>
                <IconContext.Provider value={{size: '28px', color: '#28a745'}}>
                    <div className='quanity-icons'>
                        <Button className='btn' disabled={false} onClick={increase}><FaPlusCircle/></Button>
                        <span>{props.item.quanity}</span>
                        <Button className='btn' disabled={false} onClick={decrease}><FaMinusCircle/></Button>
                    </div>
                </IconContext.Provider>
                <h4>${props.item.price}</h4>
                <IconContext.Provider value={{size: '28px', color: 'gray'}}>
                    <FaRegTrashAlt/>
                </IconContext.Provider>
            </div>
        </div>
    );
}

export default connect(null, {increaseCartItem, decreaseCartItem})(CartItem);