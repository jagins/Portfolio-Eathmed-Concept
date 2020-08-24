import React, {useEffect} from 'react';
import StoreProductCard from './StoreProductCard';
import {connect} from 'react-redux';
import {getProducts} from '../actions';

function StoreProducts(props)
{
    const {isLoading, products, getProducts} = props
    
    useEffect(() => {
        getProducts()
    }, [getProducts])
    
    return (
        <div className='product-container'>
            {!isLoading && products.length > 0 && products.map((product, id) => (
                <StoreProductCard key={id} product={product}/>
            ))}
           
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        products: state.products,
        // error: state.error
    }
}

export default connect(mapStateToProps, {getProducts})(StoreProducts);