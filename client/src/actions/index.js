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
    let string = '';
    for(let i = 0; i < strainType.length; i++)
    {
        if(strainType[i].value)
            string += strainType[i].name + ',';
    }
    axios.get(`http://localhost:5000/api/products?product_type=${currentType}&strain_type=${string}`)
    .then(res => {
        dispatch({type: 'GET_PRODUCTS', payload: res.data})
        dispatch({type: 'SUCCESS'});
    })
    .catch(err => console.log(err));
}