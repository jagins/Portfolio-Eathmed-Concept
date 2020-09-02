import React from 'react';
import faqArray from '../utils/faqArray';
import NavbarComponent from '../components/Navbar';
import '../Styles/InfoPage.css';

function FaqPage()
{
    return (
        <section>
            <NavbarComponent/>
        <div className='top'>
            <h1>Frequently Asked Questions</h1>

            {faqArray.map(faq =>
            {
                return (
                    <div>
                        <h3>{faq.title}</h3>
                        <p>{faq.desc}</p>
                    </div>
                )
            })}
        </div>
        </section>
    )
}

export default FaqPage;