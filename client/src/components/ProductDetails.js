import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import '../Styles/ProductDetails.css';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function ProductDetails()
{
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, [id])
    
    return (
        <section>
              {product && (
                  <div className='product-details-container'>
                      <div>
                        <img src={product.image} alt={product.product_name}/>
                      </div>
                      <div className='product-details'>
                        <h2>{product.product_name}</h2>
                        <h5>${product.price}</h5>
                        <hr/>
                        <span>size</span>
                        <h5>{product.size}g</h5>
                        <Button className='cart-button'size='lg' disabled>Add to Cart</Button>
                        <p>To place an order online, you'll need to <Link to='/login'>Login</Link> or <Link to='/register'>create an account</Link></p>
                      </div>
                      <div className='product-details-card'>
                          <h6>ProductDetails</h6>
                          <div className='top-half'>
                            <div className='thca-container'>
                                <h5>THCA</h5>
                                <p>{product.thca}%</p>
                            </div>
                            {product.cbd ? (
                                <div className='cbd-container'>
                                    <h5>CBDA</h5>
                                    <p>{product.cbd}%</p>
                                </div>
                                ): null}
                            </div>
                          <hr/>
                           <h5>Form</h5>
                            <p>{product.product_type}</p>
                            <h5>Strain Type</h5>
                            <p>{product.strain_type}</p>
                      </div>
                  </div>
            )}
        </section>
    );
}

export default ProductDetails;