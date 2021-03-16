import React from 'react';
import {connect} from 'react-redux';
import CartItem from './CartItem';

function CartDetails(props)
{
    return (
        <div className='shopping-cart-header'>
            <div className='your-cart-details'>
                <h3>Your Cart</h3>
                <p>{props.shoppingCart.length} {props.shoppingCart.length > 1 ? 'items':'item'}</p>
            </div>
            {props.shoppingCart.map(item => <CartItem key={item.id} item={item}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart
    }
}

export default connect(mapStateToProps, {})(CartDetails);