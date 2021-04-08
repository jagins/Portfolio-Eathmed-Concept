import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Product } from '../global/Interfaces';

interface Props {
    product: Product
}

function LoggedOut(props: Props) {
    return (
        <div className='buying-options'>
            <span>size</span>
            <h5>{props.product.size}g</h5>
            <Button className='cart-button-disabled'size='lg' disabled>Add to Cart</Button>
            <p>To place an order online, you'll need to <Link to='/store/login'>Login</Link> or <Link to='/store/register'>create an account</Link></p>
        </div>
    )
}

export default LoggedOut;