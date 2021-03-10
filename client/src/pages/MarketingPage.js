import React from 'react';
import CompanyInfo from '../components/marketingPage/CompanyInfo';
import Card from '../components/marketingPage/Card';
import marketingCards from '../utils/marketingCardArray';
import ContactForm from '../components/marketingPage/ContactForm';
import Help from '../components/marketingPage/Help';
import NavbarComponent from '../components/global/Navbar';

function MarketingPage() {
    return (
        <section>
            <NavbarComponent/>
        <div className='marketing'>
            <CompanyInfo />
            <div className='marketing-middle-section'>
                <div className='card-container'>
                    {marketingCards.map((card, index) =>
                        <Card
                            key={index}
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
        </section>
    );
}

export default MarketingPage;