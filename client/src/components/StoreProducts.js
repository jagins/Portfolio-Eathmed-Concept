import React from 'react';
import StoreProductCard from './StoreProductCard';
import {connect} from 'react-redux';

function StoreProducts(props)
{
    const {isLoading, products} = props
    return (
        <div className='product-container'>
            {!isLoading && products.length > 0 && products.map((product) => (
                <StoreProductCard key={product.id} product={product}/>
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

export default connect(mapStateToProps, {})(StoreProducts);