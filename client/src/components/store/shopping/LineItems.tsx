import React from 'react';
import {connect} from 'react-redux';

function LineItems(props)
{
    return (
        <>
            <div className='line-item'>
                <p>Subtotal</p>
                <p>${parseFloat(props.subtotal_amount).toFixed(2)}</p>
            </div>
                    
            <hr/>
                    
            <div className='line-item'>
                <p>Tax</p>
                <p>${parseFloat(props.tax).toFixed(2)}</p>
            </div>
                    
            <hr/>
                    
            <div className='line-item'>
                <h3>Total</h3>
                <h3>${parseFloat(props.total).toFixed(2)}</h3>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        subtotal_amount: state.subtotal_amount,
        total: state.total,
        tax: state.tax
    }
}

export default connect(mapStateToProps, {})(LineItems);