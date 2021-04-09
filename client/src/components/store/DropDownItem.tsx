import React from 'react';
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

interface Props {
    onSelect: () => void,
    buttonTitle: string
}

function DropDownItem(props: Props) {
    return (
        <Dropdown.Item onSelect={props.onSelect}><Button variant='outline-success'>{props.buttonTitle}</Button></Dropdown.Item>
    )
}

export default DropDownItem