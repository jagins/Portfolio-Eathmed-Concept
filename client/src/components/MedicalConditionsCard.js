import React from 'react';

function MedicalConditionsCard(props)
{
    const {title, description} = props;
    return (
        <div className='conditions'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default MedicalConditionsCard;