import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import '../Styles/ProductDetails.css';
import {Button} from 'react-bootstrap';
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
                        <p>size</p>
                        <h5>{product.size}g</h5>
                        <Button size='lg' disabled>Add to Cart</Button>
                        <p>To place an order online, you'll need to login or create an account</p>
                      </div>
                      <div>
                          <h6>ProductDetails</h6>
                          <h5>THCA</h5>
                          <p>{product.thca}</p>
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