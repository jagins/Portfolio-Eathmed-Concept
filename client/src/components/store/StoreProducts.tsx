import React from 'react';
import StoreProductCard from './StoreProductCard';
import {connect} from 'react-redux';

interface Props {
    isLoading: boolean,
    products: Array<any>
}

interface State {
    isLoading: boolean,
    products: Array<any>
}

function StoreProducts(props: Props)
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

const mapStateToProps = (state: State) => {
    return {
        isLoading: state.isLoading,
        products: state.products
    }
}

export default connect(mapStateToProps, {})(StoreProducts);