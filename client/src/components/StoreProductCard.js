import React from 'react';
import {FaPrescriptionBottleAlt} from 'react-icons/fa';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import {IconContext} from 'react-icons';

function StoreProductCard(props) 
{
    console.log(props.product);
    return (
            <div className='product-card'>
                <Chip className='product-chip' label={props.product.strain_type} variant='outlined' clickable avatar={<Avatar className='type'>{props.product.strain_type[0]}</Avatar>} />
                <img src={props.product.image} alt='product image'/>
                <hr />
                <div className='product-info'>
                    <h5>{props.product.product_name}</h5>
                    <h6>{props.product.size}g | ${props.product.price}</h6>
                </div>
                <IconContext.Provider value={{ size: '1.4rem' }}>
                    <div className='product-card-bottom'>
                        <p className='product-type'><FaPrescriptionBottleAlt className='product-icon' style={{ marginRight: '5px' }} />{props.product.product_type}</p>
                        <p>THCA: {props.product.thca}%</p>
                    </div>
                </IconContext.Provider>
            </div>
    )
}

export default StoreProductCard;