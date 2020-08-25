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
    const {FilterCurrentProducts, products} = props;
    const uniqueBrands = new Set();
    const uniqueSizes = new Set();
    let brands = []; 
    let sizes = [];

    if(products.length > 0)
    {
        for(let i = 0; i < products.length; i++)
        {
            if(!(products[i].company_id in uniqueBrands))
                uniqueBrands.add(products[i].company_id);
            
            if(!(products[i].size in uniqueSizes))
                uniqueSizes.add(products[i].size);
        }

        brands = Array.from(uniqueBrands);
        sizes = Array.from(uniqueSizes);
    }

    useEffect(() => {
        FilterCurrentProducts(typeFilter)
    }, [typeFilter, FilterCurrentProducts])

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
                    {brands.map((brand, index) => <FormControlLabel key={index} control={<Checkbox/>} label={brand}/> )}
                </FormGroup>
            
            </div>
            
            <hr/>
            
            <div>
                <h4>Size</h4>
                <FormGroup row>
                    {sizes.map((size, index) => <FormControlLabel key={index} control={<Checkbox/>} label={`${size}g`}/>)}
                </FormGroup>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
}

export default connect(mapStateToProps, {FilterCurrentProducts})(StoreSidebar);