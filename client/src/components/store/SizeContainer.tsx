import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';

interface Props {
    sizes: Array<string>
}

function SizeContainer(props: Props) {
    return (
        <div>
            <h4>Size</h4>
            <FormGroup row>
                {props.sizes.map((size, index) => <FormControlLabel key={index} control={<Checkbox/>} label={`${size}g`} />)}
            </FormGroup>
    </div>

    )
}

export default SizeContainer;