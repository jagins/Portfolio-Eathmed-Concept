import React from 'react';
import {connect} from 'react-redux';
import Item from './Item';

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
            <Item title='Subtotal' amount={props.subtotal_amount.toFixed(2)}/>
            <hr/>  
            <Item title='Tax' amount={props.tax.toFixed(2)}/>
            <hr/>     
            <Item title='Total' amount={props.total.toFixed(2)}/>
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