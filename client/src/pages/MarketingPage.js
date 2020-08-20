import React from 'react';
import CompanyInfo from '../components/CompanyInfo';
import Card from '../components/Card';
import marketingCards from '../utils/marketingCardArray';
import ContactForm from '../components/ContactForm';
import Help from '../components/Help';
import NavbarComponent from '../components/Navbar';
import '../Styles/MarketingPage.css';

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