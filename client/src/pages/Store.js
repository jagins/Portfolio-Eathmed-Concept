import React from 'react';
import logo from '../images/earthmed-site-logo-bigger.png';
import StoreHeader from '../components/StoreHeader';
import StoreSidebar from '../components/StoreSidebar';
import StoreProducts from '../components/StoreProducts';
import '../Styles/Store.css';
import ShoppingOptions from '../components/ShoppingOptions';

function Store()
{
    return (
        <section className='store'>
            <ShoppingOptions/>
            <img src={logo} alt='Earthmed Logo'/>
            <StoreHeader/>
           
            <div className='showcase'>
                <StoreSidebar/>
                <StoreProducts/>
            </div>
        </section>
    )
}

export default Store;