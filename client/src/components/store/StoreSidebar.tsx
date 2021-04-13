import React, {useState, useEffect, ChangeEvent} from 'react';
import {filterCurrentProducts} from '../../redux/actions';
import {connect} from 'react-redux';
import { Product } from '../global/Interfaces';
import TypeChip from './TypeChip';
import BrandContainer from './BrandContainer';
import SizeContainer from './SizeContainer';

interface Props {
    products: Array<Product>
    filterCurrentProducts: (strainType: Array<Object>, checkboxs: Object) => void
}

interface State {
    products: Array<Product>
}

function StoreSidebar(props: Props)
{
    const [hybrid, setHybrid] = useState({name: 'Hybrid', value: false});
    const [indica, setIndica] = useState({name: 'Indica', value: false});
    const [sativa, setSativa] = useState({name: 'Sativa', value: false});
    const [brandCheckbox, setBrandCheckbox] = useState(Object);
    const {products, filterCurrentProducts} = props;
    const uniqueBrands = new Set();
    const uniqueSizes = new Set();
    let brands: Array<any> = []; 
    let sizes: Array<any> = [];

    if(products.length > 0) {
        for(let i = 0; i < products.length; i++){
            if(!(products[i].company_name in uniqueBrands))
                uniqueBrands.add(products[i].company_name);
            
            if(!(products[i].size in uniqueSizes))
                uniqueSizes.add(products[i].size);
        }

        brands = Array.from(uniqueBrands);
        sizes = Array.from(uniqueSizes);
    }


    const changeHybrid = () => {
      setHybrid({...hybrid, value: !hybrid.value});
    }

    const changeIndica = () => {
        setIndica({...indica, value: !indica.value});
    }

    const changeSativa = () => {
      setSativa({...sativa, value: !sativa.value});
    }

    useEffect(() => {
        for(let key in brandCheckbox) {
            if(!brandCheckbox[key])
                delete brandCheckbox[key];
        }
        filterCurrentProducts([hybrid, indica, sativa], brandCheckbox)
    }, [hybrid, indica, sativa, filterCurrentProducts, brandCheckbox])

    const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        setBrandCheckbox({...brandCheckbox, [event.target.name]: event.target.checked});
    }

    return (
        <div className='sidebar'>
             <h4>Type</h4>
            <div className='types'>
                <TypeChip type={hybrid} onClick={changeHybrid}/>
                <TypeChip type={indica} onClick={changeIndica}/>
                <TypeChip type={sativa} onClick={changeSativa}/>
            </div>
            <hr/>
           <BrandContainer brands={brands} brandCheckbox={brandCheckbox} onChange={() => handleCheckbox}/>
            <hr/>
            <SizeContainer sizes={sizes}/>
        </div>
    )
}

const mapStateToProps = (state: State) => {
    return {
        products: state.products,
    };
}

export default connect(mapStateToProps, {filterCurrentProducts})(StoreSidebar);