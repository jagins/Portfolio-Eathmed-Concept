import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {calulcateLineItems, deleteCart} from '../../../redux/actions';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';
import ThingsToKnow from './ThingsToKnow';
import LineItems from './LineItems';
import OrderDetails from './OrderDetails';
import CartDetails from './CartDetails';

function ShoppingCartDetails(props) {
    const history = useHistory();

    useEffect(() => {
        props.calulcateLineItems()
    }, [])

    const placeOrder = () => {
        const orderNumber = Math.floor(Math.random() * 1000000);
        swal({
            title: 'Order Placed!',
            text: `Your order has been placed! Please arrive within 2 hours to claim your purchase. Upon check in please give the Earthmed Associate your order number: ${orderNumber}`,
            icon: 'success',
            button: 'OK' 
        })
        .then(done => {
            if(done) {
                history.push('/store');
                props.deleteCart();
            }
        })
    }
    return(
        <section className='shopping-cart-details'>
            <div className='group1'>
               <OrderDetails/>
                <div className='shopping-cart-list'>
                    <CartDetails/>
                </div>
            </div>

            <div className='group2'>
                <ThingsToKnow/>
                <div className='line-items'>
                    <LineItems/>
                    <Button className='order-btn' size='lg' onClick={placeOrder}>Place Order</Button>
                </div>
            </div>
        </section>
    );
}
export default connect(null, {calulcateLineItems, deleteCart})(ShoppingCartDetails);