import React from 'react';
import CompanyInfo from './CompanyInfo';

function MarketingPage() {
    return (
        <div className='marketing'>
            <CompanyInfo />
            <div className='marketing-middle-section'>
               <div className='card'>
                   <img 
                        src="https://tinyurl.com/ufpcnar" 
                        alt ='Picture of a Doctor'/>
                   <p>text</p>
                   <p>Read More</p>
               </div>

            </div>
        </div>
    );
}

export default MarketingPage;