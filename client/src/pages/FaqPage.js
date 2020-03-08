import React from 'react';
import faqArray from '../utils/faqArray';
import '../Styles/InfoPage.css';

function FaqPage()
{
    return (
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
    )
}

export default FaqPage;