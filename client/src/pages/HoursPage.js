import React from 'react';
import NavbarComponent from '../components/global/Navbar';
import '../Styles/InfoPage.css';

function HoursPage()
{
    return (
        <section>
            <NavbarComponent/>
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
        </section>
    )
}

export default HoursPage;