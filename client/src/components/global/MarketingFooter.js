import React from 'react';
import StoreInfoFooter from '../StoreInforFooter';

function MarketingFooter() {
    return (
        <footer>
            <div className='headings'>
                <h3>About EarthMed</h3>
                <h3>Explore Our Site</h3>
                <h3>Store Information</h3>
            </div>
            <div className='information'>
                <div className='about'>
                    <p>
                        EarthMed&trade; is an Illinois Medical Marijuana Dispensary located in Addison, IL. Our main mission is to legally provide medical Marijuana to qualifying patients and to educate the community regarding the medical aspects of cannabis.
                    </p>
                </div>
                <div className='links'>
                    <div>
                        <p>Patient Information</p>
                        <p>About</p>
                        <p>Directions</p>
                    </div>
                    <div>
                        <p>Cannabis</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className='store-footer'>
                    <StoreInfoFooter />
                </div>
            </div>
            <p className='copyright'>&copy; 2020 Josh Agins</p>
        </footer>
    )
}

export default MarketingFooter;