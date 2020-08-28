import React from 'react';
import NavbarComponent from '../components/Navbar';
import MarketingFooter from '../components/MarketingFooter';
import '../Styles/InfoPage.css';

function OpioidProgram()
{
    return(
        <section>
        <NavbarComponent />
        <div className='top'>
            <h1>Opioid Alterative Program</h1>
            <p>On August 28, 2018, Illinois law SB336, the Alteratives to Opioids Act of 2018, was signed. the act allows a treating physician to refer a patient to the Opioid Alternative Pilot Program and be treated with medical cannabis in place of opioids. </p>

            <h3>What does this mean?</h3>
            <p>Your doctor will be able to treat your condition with medical cannabis, instead of prescribing opioids. That means you can come to a medical cannabis dispensary, such as EarthMed, to obtain medical cannabis.</p>

            <h3>What are the new provisions?</h3>
            <ul>
                <li>Patients are caregivers no longer need finger prints to obtain their Medical Marijuana Card.</li>
                <li>Buisnesses cannot charge to help fill out medical cannabis registration forms.</li>
                <li>Certifying physicians must have a relationship with their patient at the physician's office, hospital, or other healthcare facility</li>
            </ul>

            <h3>When can I participate?</h3>
            <p>Hopefully soon, right now other Illinois departments must adopt new policies to allow the Opioid Alternative Pilot Program to start. Keep this page bookmarked, we will update when the program starts. You can also keep track of the official Illinois Department of Health page here –</p>
            <a href='http://www.dph.illinois.gov/topics-services/prevention-wellness/medical-cannabis' target='_blank' rel='noopener noreferrer'>
                http://www.dph.illinois.gov/topics-services/prevention-wellness/medical-cannabis
            </a>
        </div>
        <MarketingFooter/>
        </section>
    );
}

export default OpioidProgram;