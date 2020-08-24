import React from 'react';
import logo from '../images/earthmed-site-logo-bigger.png';
import Button from 'react-bootstrap/Button';
import StoreHeader from '../components/StoreHeader';
import StoreSidebar from '../components/StoreSidebar';
import StoreProducts from '../components/StoreProducts';
import '../Styles/Store.css';

function Store()
{
    return (
        <section className='store'>
            <div className='login'>
                <Button variant='success'>Login/Register</Button>
            </div>
            <img src={logo} alt='Earthmed Logo'/>
            <StoreHeader/>
            <StoreSidebar/>
            <StoreProducts/>
        </section>
    )
}

export default Store;