import React from 'react';
import Chip from '@material-ui/core/Chip';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function StoreSidebar()
{
    return (
        <div className='sidebar'>
            <div>
                <h4>Type</h4>
                    <Chip label='Hybrid' variant='outlined' clickable/>
                    <Chip label='Indica' variant='outlined' clickable/>
                    <Chip label='Sativa' variant='outlined' clickable/>
            </div>
            
            <hr/>
            
            <div>
                <h4>Brand</h4>
                <FormGroup row>
                    <FormControlLabel control={<Checkbox/>} label='Cresco'/>
                    <FormControlLabel control={<Checkbox/>} label='Ozone'/>
                    <FormControlLabel control={<Checkbox/>} label='High Supply'/>
                    <FormControlLabel control={<Checkbox/>} label='Verano'/>
                </FormGroup>
            
            </div>
            
            <hr/>
            
            <div>
                <h4>Size</h4>
                <FormGroup row>
                    <FormControlLabel control={<Checkbox/>} label='14g'/>
                    <FormControlLabel control={<Checkbox/>} label='3.5g'/>
                    <FormControlLabel control={<Checkbox/>} label='7g'/>
                </FormGroup>
            </div>
            
            <hr/>
            
            <div>
                <h4>Category</h4>
                <FormGroup row>
                    <FormControlLabel control={<Checkbox/>} label='Popcorn'/>
                    <FormControlLabel control={<Checkbox/>} label='Shake'/>
                </FormGroup>
            </div>

        </div>
    )
}

export default StoreSidebar;