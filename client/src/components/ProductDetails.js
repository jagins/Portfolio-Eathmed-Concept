import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import '../Styles/ProductDetails.css';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import {FaPrescriptionBottleAlt, FaJoint, FaCookieBite} from 'react-icons/fa';
import {GiSodaCan, GiSmokeBomb} from 'react-icons/gi';
import MarketingFooter from './MarketingFooter';

function ProductDetails()
{
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, [id])
    
    const getProductType = () => {
        switch(product.product_type)
        {
            case 'Flower':
                return <FaPrescriptionBottleAlt/>
            case 'Preroll':
                return <FaJoint/>
            case 'Edible':
                return <FaCookieBite/>
            case 'Beverage':
                return <GiSodaCan/>
            case 'Vape':
                return <GiSmokeBomb/>
            default: 
                return null;
        }
    }
  
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
                          <hr className='product-details-card-header'/>
                           <div className='bottom-half'>
                               <div className='form-container'>
                                    <h5>Form</h5>
                                    <Chip 
                                        className='product-chip'
                                        label={product.product_type} 
                                        variant='outlined' 
                                        clickable 
                                        avatar={<Avatar className='sativa'>{getProductType()}</Avatar>} 
                                    />
                               </div>

                               <div className='strain-container'>
                                    <h5>Strain Type</h5>
                                    <Chip 
                                        className='product-chip'
                                        label={product.strain_type} 
                                        variant='outlined' 
                                        avatar={<Avatar className={product.strain_type}>{product.strain_type[0]}</Avatar>} 
                                    />
                               </div>
                           </div>
                      </div>
                  </div>
            )}
            <MarketingFooter/>
        </section>
    );
}

export default ProductDetails;