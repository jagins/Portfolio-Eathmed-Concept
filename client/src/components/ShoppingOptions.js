import React from 'react';
import {useHistory} from 'react-router-dom';
import {checkValidToken} from '../utils/tokenMethods';
import {IconContext} from 'react-icons';
import {FaShoppingCart} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

function ShoppingOptions()
{
    const history = useHistory();
    return (
        <div className='login'>
            {checkValidToken() ? (
                <IconContext.Provider value={{size: '40px', color: ' #28a745', className: 'cart-btn'}}>
                    <FaShoppingCart onClick={() => history.push('/store/cart')}/>
                    <span className='cart-badge'>1</span>
                </IconContext.Provider> )
                : 
                <Button variant='success' onClick={() => history.push('/store/login')}>Login/Register</Button>}
            </div>
    );
}

export default ShoppingOptions;