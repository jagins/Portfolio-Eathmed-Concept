import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import {FaPrescriptionBottleAlt, FaJoint, FaCookieBite, FaPlusCircle, FaMinusCircle} from 'react-icons/fa';
import {GiSodaCan, GiSmokeBomb} from 'react-icons/gi';
import {checkValidToken} from '../../utils/tokenMethods';
import {IconContext} from 'react-icons';
import ShoppingOptions from '../store/shopping/ShoppingOptions';
import {connect} from 'react-redux';
import {addProductToCart} from '../../redux/actions';

interface Props {
    addProductToCart: (product: Object, quanity: number) => void
}

interface ParamTypes {
    id: string
}

interface Product {
    id: number,
    product_name: string,
    price: number,
    product_type: string,
    thca: number,
    cbd: number,
    size: number,
    strain_type: string,
    image: string,
    description: string,
    company_id: number
}

function ProductDetails(props: Props)
{
    const {id} = useParams<ParamTypes>();
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [quanity, setQuanity] = useState(1);

    useEffect(() => {
        axios.get<any>(`${process.env.REACT_APP_URL}/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, [id])
    
    const getProductType = () => {
        switch(product!.product_type)
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

    const increase = () => {
        setQuanity(quanity + 1);
    }

    const decrease = () => {
        setQuanity(quanity - 1);
        if(quanity <= 0)
            setQuanity(0)
    }
    
    const addToCart = () => {
        props.addProductToCart(product!, quanity);
    }
    
    console.log('product console log: ' + product)

    return (
        <section>
            <ShoppingOptions/>
              {product && (
                  <div className='product-details-container'>
                      <div>
                        <img src={product.image} alt={product.product_name}/>
                      </div>
                      <div className='product-details'>
                        <h2>{product.product_name}</h2>
                        <h5>${product.price}</h5>
                        <hr/>
                        {checkValidToken() ? 
                            <div className='buying-options'>
                                <div className='quanity-section'>
                                    <div className='size'>
                                        <h6>SIZE</h6>
                                        <h5>{product.size}g</h5>
                                    </div>
                                    <div className='quanity-amnt'>
                                        <h6>QUANITY</h6>
                                        <IconContext.Provider value={{size: '28px', color: '#28a745'}}>
                                            <div className='quanity-icons'>
                                                <Button className='btn' disabled={quanity >=10} onClick={increase}><FaPlusCircle/></Button>
                                                <span>{quanity}</span>
                                                <Button className='btn' disabled={quanity <= 1} onClick={decrease}><FaMinusCircle/></Button>
                                            </div>
                                        </IconContext.Provider>
                                    </div>
                                </div>
                                <Button className='cart-button-active'size='lg' onClick={addToCart}>Add to Cart</Button>
                            </div> :
                            <div className='buying-options'>
                                <span>size</span>
                                <h5>{product.size}g</h5>
                                <Button className='cart-button-disabled'size='lg' disabled>Add to Cart</Button>
                                <p>To place an order online, you'll need to <Link to='/store/login'>Login</Link> or <Link to='/store/register'>create an account</Link></p>
                            </div>}
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
        </section>
    );
}


export default connect(null, {addProductToCart})(ProductDetails);