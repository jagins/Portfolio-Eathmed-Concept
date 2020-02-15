import React from 'react';
import logo from '../images/earthmed-site-logo-bigger.png';
import { MdPlace, MdPhone } from 'react-icons/md';
import { FaRegClock, FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function MarketingPage() {
    return (
        <div className='container'>
            <img src={logo} alt='EarthMed' />
            <IconContext.Provider value={{ color: 'green', size: '30px', className: 'icons' }}>
                <div className='contact-icons'>
                    <MdPlace />
                    <MdPhone />
                    <FaRegClock />
                    <FaShoppingCart />
                </div>
            </IconContext.Provider>
        </div>
    );
}

export default MarketingPage;