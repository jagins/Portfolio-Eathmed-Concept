import React, { ReactNode } from 'react';
import { Button } from 'react-bootstrap';

interface Props {
    disabled: boolean
    onClick: () => void,
    children: ReactNode
}

function QuanityButton(props: Props) {
    return (
        <Button className='btn' disabled={props.disabled} onClick={props.onClick}>{props.children}</Button>
    )
}

export default QuanityButton;