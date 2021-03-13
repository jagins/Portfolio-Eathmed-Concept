import React from 'react';
import stepsArray from '../utils/stepsArray';
import NavbarComponent from '../components/global/Navbar';
import QualificationsList from '../components/QualificationsList';

function MedicalCardInfo() {
    return (
        <section>
            <NavbarComponent />
        <div className='top'>
            <h1>Get Your Medical Marijuana Card</h1>
            <p className='desc'>In order to qualify for a license to use and legally purchase medical marijuana, you must fulfill the following qualifications:</p>

            <div className='qualifications'>
               <QualificationsList/>
            </div>

            <div className='steps-container'>
                <h3>Steps To Get Started</h3>
                <div className='steps'>
                    {stepsArray.map((step, index) =>
                    {
                        return (
                            <div className={`Step ${index + 1}`}>
                                <p className='step'>Step {index + 1} - {step.title}</p>
                                <p>{step.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </section>
    )
}

export default MedicalCardInfo;