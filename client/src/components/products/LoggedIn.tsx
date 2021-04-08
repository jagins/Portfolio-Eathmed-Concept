import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import QuanityButton from '../global/QuanityButton';
import {Product} from '../global/Interfaces';
import { connect } from 'react-redux';
import {addProductToCart} from '../../redux/actions';
import SizeHeader from './SizeHeader';

interface Props {
    product: Product
    addProductToCart: (product: Product, quanity: number) => void
}

function LoggedIn(props: Props) {
    const [quanity, setQuanity] = useState(1);
    const increase = () => {
        setQuanity(quanity + 1);
    }

    const decrease = () => {
        setQuanity(quanity - 1);
        if(quanity <= 0)
            setQuanity(0)
    }
    const addToCart = () => {
        props.addProductToCart(props.product!, quanity);
    }

    return (
        <div className='buying-options'>
            <div className='quanity-section'>
                <SizeHeader size={props.product.size}/>
                <div className='quanity-amnt'>
                    <h6>QUANITY</h6>
                    <IconContext.Provider value={{size: '28px', color: '#28a745'}}>
                        <div className='quanity-icons'>
                            <QuanityButton disabled={quanity >=10} onClick={increase}><FaPlusCircle/></QuanityButton>
                            <span>{quanity}</span>
                            <QuanityButton disabled={quanity <= 1} onClick={decrease}><FaMinusCircle/></QuanityButton>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
            <Button className='cart-button-active'size='lg' onClick={addToCart}>Add to Cart</Button>
        </div>
    )
}

export default connect(null, {addProductToCart})(LoggedIn);