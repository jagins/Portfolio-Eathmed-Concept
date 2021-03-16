import React from 'react';
import StyledRadio from '../../../hooks/StyledRadio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function OrderDetails()
{
    return (
        <div className='order-details'>
            <h3>Order Details</h3>
            <h5>Addison, IL</h5>
            <p>852 S. Westgate St., Addison, IL 60101</p>
            <FormControlLabel
                control={<StyledRadio checked={true} />}
                label='In Store Pickup'
            />
        </div>
    )
}

export default OrderDetails;