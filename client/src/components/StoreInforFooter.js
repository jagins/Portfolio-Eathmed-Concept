import React from 'react';
import StoreInfo from './StoreInfoHeader';
import { MdPlace, MdPhone } from 'react-icons/md';
import { FaRegClock, FaEnvelope } from 'react-icons/fa';
import { IconContext } from 'react-icons';


function StoreInfoFooter()
{
    return(
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
                    <p className='info'><FaRegClock /> 
                        <span>
                            Sun - 12pm to 5pm (Medical Only)
                        </span>
                        <p className='hours'>Mon - 11am to 7pm</p>
                        <p className='hours'>Tues - 11am to 7pm</p>
                        <p className='hours'>Wed - 11am to 7pm</p>
                        <p className='hours'>Thu - 11am to 8pm</p>
                        <p className='hours'>Fri - 11am to 8pm</p>
                        <p className='hours'>Sat - 11am to 8pm</p>
                    </p>
                    <p className='info'><FaEnvelope/>support@earthmed.com</p>
                </div>
            </div>
        </IconContext.Provider>
    );
}

export default StoreInfoFooter;