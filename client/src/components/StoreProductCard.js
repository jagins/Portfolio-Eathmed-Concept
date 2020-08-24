import React from 'react';
import {FaPrescriptionBottleAlt} from 'react-icons/fa';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import {IconContext} from 'react-icons';

function StoreProductCard() 
{
    return (
            <div className='product-card'>
                <Chip className='product-chip' label='Hybrid' variant='outlined' clickable avatar={<Avatar className='type'>H</Avatar>} />
                <img src='https://s3-us-west-2.amazonaws.com/leafly-images/products/photos/Pb2XsWR3TmCUlkkQjc8Y_Cresco_3_5g_Flower_Indica-01.jpg' />
                <hr />
                <div className='product-info'>
                    <h5>CG #4 Flower 3.5g</h5>
                    <h6>3.5g | $63.49</h6>
                </div>
                <IconContext.Provider value={{ size: '1.4rem' }}>
                    <div className='product-card-bottom'>
                        <p className='product-type'><FaPrescriptionBottleAlt className='product-icon' style={{ marginRight: '5px' }} />Flower</p>
                        <p>THCA: 14.79%</p>
                    </div>
                </IconContext.Provider>
            </div>
    )
}

export default StoreProductCard;