import React from 'react';
import {connect} from 'react-redux';
import ShoppingCartDetails from '../components/ShoppingCartDetails';
import '../Styles/ShoppingCart.css';

function ShoppingCart(props)
{
    return (
        <section>
            {props.shoppingCart.length === 0 ? (
               <div className='cart-empty'>
                   <h3>Your cart is empty</h3>
                   <p>It looks like you haven't added any items to your cart yet</p>
               </div>
            ) :
            <ShoppingCartDetails/>}
        </section>
    )
}

const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart
    }
}

export default connect(mapStateToProps, {})(ShoppingCart);