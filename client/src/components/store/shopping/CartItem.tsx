import React from 'react';
import {FaRegTrashAlt} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa';
import {connect} from 'react-redux';
import {increaseCartItem, decreaseCartItem, removeCartItem} from '../../../redux/actions';
import QuanityButton from '../../global/QuanityButton';
import { Product } from '../../global/Interfaces';

interface Props {
    increaseCartItem: (item: Product) => void,
    decreaseCartItem: (item: Product) => void,
    removeCartItem: (item: Product) => void,
    key: number,
    item: Product
}

function CartItem(props: Props) {
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
                        <QuanityButton disabled={false} onClick={increase}><FaPlusCircle/></QuanityButton>
                        <span>{props.item.quanity}</span>
                        <QuanityButton disabled={false} onClick={decrease}><FaMinusCircle/></QuanityButton>
                    </div>
                </IconContext.Provider>
                <h4>${props.item.price}</h4>
                <IconContext.Provider value={{size: '28px', color: 'gray', style: {cursor: 'pointer'}}}>
                    <FaRegTrashAlt onClick={() => props.removeCartItem(props.item)}/>
                </IconContext.Provider>
            </div>
        </div>
    );
}

export default connect(null, {increaseCartItem, decreaseCartItem, removeCartItem})(CartItem);