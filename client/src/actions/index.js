import {testArray} from '../utils/testProducts';
export const getProducts = () => dispatch =>
{
    dispatch({type: 'GET_PRODUCTS', payload: testArray});
    dispatch({type: 'SUCCESS'})
}