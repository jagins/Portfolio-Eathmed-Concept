import React from 'react';
import { MdPlace, MdPhone } from 'react-icons/md';
import { FaRegClock, FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function StoreInfo() {
    return (
        <IconContext.Provider value={{ color: 'green', size: '30px', className: 'icons' }}>
            <div className='contact-icons'>
                <div className='address'>
                    <address>
                        <MdPlace />
                        852 WestGate St,
                        <br />
                        <p>Addison, IL 60101</p>
                    </address>
                </div>
                <div className='store-info'>
                    <p className='info'><MdPhone />(847) 607-0796</p>
                    <p className='info'><FaRegClock /> View Hours</p>
                    <p><FaShoppingCart />Shop Now</p>
                </div>
            </div>
        </IconContext.Provider>
    );
}


export default StoreInfo;