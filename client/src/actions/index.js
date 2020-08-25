import {testArray} from '../utils/testProducts';

export const getProducts = () => dispatch =>
{
    dispatch({type: 'GET_PRODUCTS', payload: testArray.filter(product => product.product_type === 'Flower')});
    dispatch({type: 'SUCCESS'})
}

export const filterType = type => dispatch =>
{
    dispatch({type: 'GET_PRODUCTS', payload: testArray});
    dispatch({type: 'CHANGE_TYPE', payload: type})
    dispatch({type: 'SUCCESS'});
}

export const FilterCurrentProducts = type => dispatch =>
{
    dispatch({type: 'GET_PRODUCTS', payload: testArray});
    dispatch({type: 'CHANGE_STRAIN_TYPE', payload: type});
    dispatch({type: 'SUCCESS'});
}