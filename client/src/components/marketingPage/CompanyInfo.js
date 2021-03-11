import React from 'react';
import logo from '../../images/earthmed-site-logo-bigger.png';
import StoreInfoHeader from '../store/StoreInfoHeader';

function CompanyInfo() {
    return (
        <div className='container'>
            <div className='img-container'>
                <img src={logo} alt='EarthMed' />
            </div>
           <StoreInfoHeader/>
        </div>
    );
}

export default CompanyInfo;