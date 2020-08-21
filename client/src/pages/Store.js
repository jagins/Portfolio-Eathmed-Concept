import React from 'react';
import logo from '../images/earthmed-site-logo-bigger.png';
import Button from 'react-bootstrap/Button';
import StoreHeader from '../components/StoreHeader';
import '../Styles/Store.css';

function Store()
{
    return (
        <section className='store'>
            <div className='login'>
                <Button>Login/Register</Button>
            </div>
            <img src={logo} alt='Earthmed Logo'/>
            <StoreHeader/>
        </section>
    )
}

export default Store;