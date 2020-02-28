import React from 'react';
import MedicalConditonsArray from '../utils/MecialConditionsArray';
import MedicalConditionsCard from '../components/MedicalConditionsCard';
import '../Styles/InfoPage.css';

function MedicalConditionsPage()
{
    return (
        <div className='top'>
            <h1>Qualifying Medcial Conditions</h1>
            <p>While there are hundreds of conditions that can potentially be helped by the use of medical marijuana, the state of Illinois only recognizes the following conditions as treatable using cannabis. **Please note that this list will be changing as the Illinois law evolves. If you do not see your condition listed, please check back at a later date as we will be updating the list of medical conditions that the state of Illinois deems appropriate for medical marijuana use.**</p>

            <div className='condtions-container'>
                {MedicalConditonsArray.map((condition, index) =>
                    <MedicalConditionsCard
                        key={index}
                        title={condition.title}
                        description={condition.description} 
                    />)}
            </div>
        </div>
    )
}

export default MedicalConditionsPage;