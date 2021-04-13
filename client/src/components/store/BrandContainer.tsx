import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

interface Props {
    brands: Array<string>
    brandCheckbox: any,
    onChange: () => void
}

function BrandContainer(props: Props) {
    return (
        <div>
            <h4>Brand</h4>
            <FormGroup row>
                {props.brands.map((brand, index) => 
                    <FormControlLabel 
                        key={index} 
                        control={<Checkbox checked={props.brandCheckbox[brand] || false} onChange={props.onChange} name={brand}/>} 
                        label={brand} 
                    />)}
            </FormGroup>
    
        </div>
    )
}

export default BrandContainer;