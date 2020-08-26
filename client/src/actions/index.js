// import {testArray} from '../utils/testProducts';
import axios from 'axios';
let currentType ='';
export const getProducts = (type) => dispatch =>
{
    currentType = type;
    axios.get(`http://localhost:5000/api/products?product_type=${type}`)
    .then(res => {
        dispatch({type: 'GET_PRODUCTS', payload: res.data})
        dispatch({type: 'SUCCESS'});
        
    })
    .catch(err => console.log(err));
}

export const filterCurrentProducts = (strainType) => dispatch =>
{
    axios.get(`http://localhost:5000/api/products?product_type=${currentType}&strain_type=${strainType}`)
    .then(res => {
        dispatch({type: 'GET_PRODUCTS', payload: res.data})
        dispatch({type: 'SUCCESS'});
    })
    .catch(err => console.log(err));
}