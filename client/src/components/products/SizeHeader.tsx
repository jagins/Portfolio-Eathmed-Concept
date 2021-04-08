import React from 'react';

interface Props {
    size: number
}

function SizeHeader(props: Props) {
    return (
        <div className='size'>
            <h6>SIZE</h6>
            <h5>{props.size}g</h5>
        </div>
    )
}

export default SizeHeader;