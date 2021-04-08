import React from 'react';
import {connect} from 'react-redux';

interface State {
    subtotal_amount: number,
    total: number,
    tax: number
}

interface Props {
    subtotal_amount: number,
    total: number,
    tax: number
}

function LineItems(props: Props)
{
    return (
        <>
            <div className='line-item'>
                <p>Subtotal</p>
                <p>${(props.subtotal_amount).toFixed(2)}</p>
            </div>
            <hr/>  
            <div className='line-item'>
                <p>Tax</p>
                <p>${(props.tax).toFixed(2)}</p>
            </div>   
            <hr/>     
            <div className='line-item'>
                <h3>Total</h3>
                <h3>${(props.total).toFixed(2)}</h3>
            </div>
        </>
    )
}

const mapStateToProps = (state: State) => {
    return {
        subtotal_amount: state.subtotal_amount,
        total: state.total,
        tax: state.tax
    }
}

export default connect(mapStateToProps, {})(LineItems);