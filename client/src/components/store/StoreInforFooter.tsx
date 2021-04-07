import React from 'react';
import { MdPlace, MdPhone } from 'react-icons/md';
import { FaRegClock, FaEnvelope } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function StoreInfoFooter()
{
    return(
        <IconContext.Provider value={{ color: '#999C9F', size: '30px', className: 'icons' }}>
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
                    <p className='info' style={{color: '#999C9F'}}><MdPhone />(847) 607-0796</p>
                    <p className='info'><FaRegClock /> 
                        <span style={{color: '#999C9F'}}>
                            Sun - 12pm to 5pm (Medical Only)
                        </span>
                        <span className='hours'>Mon - 11am to 7pm</span>
                        <span className='hours'>Tues - 11am to 7pm</span>
                        <span className='hours'>Wed - 11am to 7pm</span>
                        <span className='hours'>Thu - 11am to 8pm</span>
                        <span className='hours'>Fri - 11am to 8pm</span>
                        <span className='hours'>Sat - 11am to 8pm</span>
                    </p>
                    <p className='info' style={{color: '#999C9F'}}><FaEnvelope/>support@earthmed.com</p>
                </div>
            </div>
        </IconContext.Provider>
    );
}

export default StoreInfoFooter;