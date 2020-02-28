import React from 'react';
import medicalConditonsArray from '../utils/mecialConditionsArray';
import MedicalConditionsCard from '../components/MedicalConditionsCard';
import {otherConditions, spinalConditions} from '../utils/otherMedicalConditions';
import '../Styles/InfoPage.css';
import '../Styles/MedicalCondtions.css';

function MedicalConditionsPage()
{
    return (
        <div className='top'>
            <h1>Qualifying Medical Conditions</h1>
            <p className='desc'>While there are hundreds of conditions that can potentially be helped by the use of medical marijuana, the state of Illinois only recognizes the following conditions as treatable using cannabis. **Please note that this list will be changing as the Illinois law evolves. If you do not see your condition listed, please check back at a later date as we will be updating the list of medical conditions that the state of Illinois deems appropriate for medical marijuana use.**</p>

            <div className='condtions-container'>
                {medicalConditonsArray.map((condition, index) =>
                    <MedicalConditionsCard
                        key={index}
                        title={condition.title}
                        description={condition.description} 
                    />)}
                   <h3>Additional Medical Conditions</h3>
                   <p>The state of Illinois has approved the use of medicinal marijuana not only for the conditions listed above but also for these following conditions:</p>
                   <ul className='conditions-list'>
                       {otherConditions.map((condition, index) =>
                       {
                           if(index === 25)
                           {
                               return <ul className='inner-list'>
                                   {spinalConditions.map(c =>
                                    {
                                        return <li>{c}</li>
                                    })}
                               </ul>
                           }
                           else
                           {
                                return <li>{condition}</li>
                           }
                       })}
                   </ul>
            </div>
        </div>
    )
}

export default MedicalConditionsPage;