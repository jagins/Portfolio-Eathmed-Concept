import React from 'react';

interface Props {
    key: number,
    title: string,
    description: string
}

function MedicalConditionsCard(props: Props)
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