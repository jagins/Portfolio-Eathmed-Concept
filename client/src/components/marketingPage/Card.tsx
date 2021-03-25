import React from 'react';

interface CardProps {
    key: number,
    url: string,
    caption: string,
    title: string,
    descritpion: string
}

function Card(props: CardProps)
{
    const {url, caption, title, descritpion} = props;
    return(
        <div className='card border-0'>
            <img
                src={url}
                alt={caption}
            />
            <h3>{title}</h3>
            <p>{descritpion}</p>
            <p className='button'>Read More</p>
        </div>
    );
}


export default Card;