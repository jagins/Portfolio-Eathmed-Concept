import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {checkValidToken} from '../../utils/tokenMethods';
import ShoppingOptions from '../store/shopping/ShoppingOptions';
import {Product} from '../global/Interfaces';
import ProductImage from './ProductImage';
import ProductHeader from './ProductHeader';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import ProductDetailsCard from './ProductDetailsCard';

interface Props {
    addProductToCart: (product: Object, quanity: number) => void
}

interface ParamTypes {
    id: string
}

function ProductDetails(props: Props)
{
    const {id} = useParams<ParamTypes>();
    const [product, setProduct] = useState<Product | undefined>(undefined);

    useEffect(() => {
        axios.get<any>(`${process.env.REACT_APP_URL}/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, [id])
    
    return (
        <section>
            <ShoppingOptions/>
              {product && (
                  <div className='product-details-container'>
                      <ProductImage image={product.image} name={product.product_name}/>
                      <div className='product-details'>
                        <ProductHeader name={product.product_name} price={product.price}/>
                        <hr/>
                        {checkValidToken() ? 
                            <LoggedIn product={product}/> :
                            <LoggedOut product={product}/>}
                      </div>
                        <ProductDetailsCard product={product}/>
                  </div>
            )}
        </section>
    );
}


export default ProductDetails;