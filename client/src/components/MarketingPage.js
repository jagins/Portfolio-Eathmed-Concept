import React from 'react';
import CompanyInfo from './CompanyInfo';
import Card from './Card';
import marketingCards from '../utils/MarketingCardArray';
import ContactForm from './ContactForm';
import Help from './Help';
import '../Styles/MarketingPage.css';

function MarketingPage() {
    return (
        <div className='marketing'>
            <CompanyInfo />
            <div className='marketing-middle-section'>
                <div className='card-container'>
                    {marketingCards.map(card =>
                        <Card
                            url={card.url}
                            alt={card.caption}
                            title={card.title}
                            descritpion={card.description}
                        />)}
                </div>
            </div>
            <div className='marketing-contact-section'>
                <Help />
                <ContactForm />
            </div>
        </div>
    );
}

export default MarketingPage;