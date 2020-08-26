import React, {useState, useEffect} from 'react';
import Chip from '@material-ui/core/Chip';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Avartar from '@material-ui/core/Avatar';
import {filterCurrentProducts} from '../actions';
import {connect} from 'react-redux';

function StoreSidebar(props)
{
    const [hybrid, setHybrid] = useState({name: 'Hybrid', value: false});
    const [indica, setIndica] = useState({name: 'Indica', value: false});
    const [sativa, setSativa] = useState({name: 'Sativa', value: false});
    const {products, filterCurrentProducts} = props;
    const uniqueBrands = new Set();
    const uniqueSizes = new Set();
    let brands = []; 
    let sizes = [];

    if(products.length > 0)
    {
        for(let i = 0; i < products.length; i++)
        {
            if(!(products[i].company_name in uniqueBrands))
                uniqueBrands.add(products[i].company_name);
            
            if(!(products[i].size in uniqueSizes))
                uniqueSizes.add(products[i].size);
        }

        brands = Array.from(uniqueBrands);
        sizes = Array.from(uniqueSizes);
    }


    const changeHybrid = () => 
    {
      setHybrid({
          ...hybrid,
          value: !hybrid.value
      })
    }

    const changeIndica = () => 
    {
      setIndica({
          ...indica,
          value: !indica.value
      })
    }

    const changeSativa = () => 
    {
      setSativa({
          ...sativa,
          value: !sativa.value
      })
    }

    useEffect(() => {
        filterCurrentProducts([hybrid, indica, sativa])
    }, [hybrid, indica, sativa, filterCurrentProducts])

    return (
        <div className='sidebar'>
             <h4>Type</h4>
            <div className='types'>
                    <Chip 
                        label='Hybrid' 
                        variant='outlined' 
                        clickable 
                        avatar={<Avartar className='hybrid'>H</Avartar>} 
                        onClick={changeHybrid} 
                        color={!hybrid.value ? 'primary' : 'secondary'}
                    />
                    <Chip 
                        label='Indica' 
                        variant='outlined' 
                        clickable 
                        avatar={<Avartar className='indica'>I</Avartar>} 
                        onClick={changeIndica}
                        color={!indica.value ? 'primary' : 'secondary'}
                    />
                    <Chip 
                        label='Sativa' 
                        variant='outlined' 
                        clickable 
                        avatar={<Avartar className='sativa'>S</Avartar>} 
                        onClick={changeSativa}
                        color={!sativa.value ? 'primary' : 'secondary'}
                    />
            </div>
            
            <hr/>
            
            <div>
                <h4>Brand</h4>
                <FormGroup row>
                    {brands.length === 1 ? <FormControlLabel key={brands[0]} control={<Checkbox/>} label={brands[0]} disabled/>  : 
                    brands.map((brand, index) => <FormControlLabel key={index} control={<Checkbox/>} label={brand}/> )}
                </FormGroup>
            
            </div>
            
            <hr/>
            
            <div>
                <h4>Size</h4>
                <FormGroup row>
                    {sizes.length === 1 ? <FormControlLabel key={sizes[0]} control={<Checkbox/>} label={`${sizes[0]}g`} disabled/> :
                    sizes.map((size, index) => <FormControlLabel key={index} control={<Checkbox/>} label={`${size}g`} />)}
                </FormGroup>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products,
    };
}

export default connect(mapStateToProps, {filterCurrentProducts})(StoreSidebar);