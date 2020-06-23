import React from 'react';
import '../Styles/InfoPage.css';

function HoursPage()
{
    return (
        <div className='top'>
            <h1>Hours of Operation</h1>
            <div className='hours'>
                <p>Sunday – 12pm to 5pm (Medical Only)</p>
                <p>Monday -11am to 7pm</p>
                <p>Tuesday – 11am to 7pm</p>
                <p>Wednesday – 11am to 7pm</p>
                <p>Thursday – 11am to 8pm</p>
                <p>Friday – 11am to 8pm</p>
                <p>Saturday – 11am to 8pm</p>
            </div>
        </div>
    )
}

export default HoursPage;