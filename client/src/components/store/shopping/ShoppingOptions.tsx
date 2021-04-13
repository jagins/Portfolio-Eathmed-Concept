import React from 'react';
import {useHistory} from 'react-router-dom';
import {checkValidToken} from '../../../utils/tokenMethods';
import {IconContext} from 'react-icons';
import {FaShoppingCart} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import { Product } from '../../global/Interfaces';

interface Props {
    shoppingCart: Array<Product>
}

interface State {
    shoppingCart: Array<Product>
}

function ShoppingOptions(props: Props)
{
    const history = useHistory();
    return (
        <div className='login'>
            {checkValidToken() ? (
                <IconContext.Provider value={{size: '40px', color: ' #28a745', className: 'cart-btn'}}>
                    <FaShoppingCart onClick={() => history.push('/store/cart')}/>
            <span className='cart-badge'>{props.shoppingCart.length}</span>
                </IconContext.Provider> )
                : 
                <Button variant='success' onClick={() => history.push('/store/login')}>Login/Register</Button>}
            </div>
    );
}

const mapStateToProps = (state: State) => {
    return {
        shoppingCart: state.shoppingCart
    }
}

export default connect(mapStateToProps, {})(ShoppingOptions);