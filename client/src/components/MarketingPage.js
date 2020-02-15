import React from 'react';
import CompanyInfo from './CompanyInfo';

function MarketingPage() {
    return (
        <div className='marketing'>
            <CompanyInfo />
            <div className='marketing-middle-section'>
                <div className='card-container'>
                    <div className='card border-0'>
                        <img
                            src="https://tinyurl.com/ufpcnar"
                            alt='Doctor' />
                        <h3>Qualifying Medical Conditions</h3>
                        <p>Find out if you qualify to recieve benefits of Medical Marijuana.</p>
                        <p className='button'>Read More</p>
                    </div>
                    <div className='card border-0'>
                        <img
                            src="https://tinyurl.com/tr4sjw3"
                            alt='Marijuana in jars' />
                        <h3>Get Your Medical Marijuana Card</h3>
                        <p>Learn how to get your Medical Marijuana Card.
                            It takes time, so get started now!
                    </p>
                        <p className='button'>Read More</p>
                    </div>
                    <div className='card border-0'>
                        <img
                            src="https://tinyurl.com/wovebbj"
                            alt='Handshake' />
                        <h3>Frequently Asked Questions</h3>
                        <p>Do you have questions? We are here to help! Click read more below for a list of answers to commonly asked questions.</p>
                        <p className='button'>Read More</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MarketingPage;