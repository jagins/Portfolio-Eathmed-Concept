import React, {useState, useEffect} from 'react';
import Chip from '@material-ui/core/Chip';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Avartar from '@material-ui/core/Avatar';
import {FilterCurrentProducts} from '../actions';
import {connect} from 'react-redux';

function StoreSidebar(props)
{
    const [typeFilter, setTypeFilter] = useState(null);
    const {FilterCurrentProducts} = props;

    useEffect(() => {
        FilterCurrentProducts(typeFilter)
    }, [typeFilter])

    return (
        <div className='sidebar'>
             <h4>Type</h4>
            <div className='types'>
                    <Chip label='Hybrid' variant='outlined' clickable avatar={<Avartar className='hybrid'>H</Avartar>} onClick={() => setTypeFilter('Hybrid')}/>
                    <Chip label='Indica' variant='outlined' clickable avatar={<Avartar className='indica'>I</Avartar>} onClick={() => setTypeFilter('Indica')}/>
                    <Chip label='Sativa' variant='outlined' clickable avatar={<Avartar className='sativa'>S</Avartar>} onClick={() => setTypeFilter('Sativa')}/>
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

        </div>
    )
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {FilterCurrentProducts})(StoreSidebar);