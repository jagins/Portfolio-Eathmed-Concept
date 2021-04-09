import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import React from 'react';
import { Product } from '../global/Interfaces';

interface Props {
    product: Product
}

function ProductDetailsCard(props: Props) {
    return (
        <div className='product-details-card'>
            <h6>ProductDetails</h6>
            <div className='top-half'>
                <div className='thca-container'>
                    <h5>THCA</h5>
                    <p>{props.product.thca}%</p>
                </div>
            {props.product.cbd && (
                <div className='cbd-container'>
                  <h5>CBDA</h5>
                  <p>{props.product.cbd}%</p>
                </div>
              )}
          </div>
        <hr className='product-details-card-header'/>
         <div className='bottom-half'>
             <div className='form-container'>
                  <h5>Form</h5>
                  <Chip 
                    className='product-chip'
                    label={props.product.product_type} 
                    variant='outlined'  
                  />
             </div>

             <div className='strain-container'>
                  <h5>Strain Type</h5>
                  <Chip 
                    className='product-chip'
                    label={props.product.strain_type} 
                    variant='outlined' 
                    avatar={<Avatar className={props.product.strain_type}>{props.product.strain_type[0]}</Avatar>} 
                  />
             </div>
         </div>
      </div>
    )
}

export default ProductDetailsCard