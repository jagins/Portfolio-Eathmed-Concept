// import {testArray} from '../utils/testProducts';
import axios from 'axios';

export const getProducts = (type) => dispatch =>
{
    axios.get(`http://localhost:5000/api/products?product_type=${type}`)
    .then(res => {
        dispatch({type: 'GET_PRODUCTS', payload: res.data})
        dispatch({type: 'SUCCESS'});
        
    })
    .catch(err => console.log(err));
}

// export const filterType = (type) => dispatch =>
// {
//     console.log(type);
//     getProducts();
//     dispatch({type: 'CHANGE_TYPE', payload: type});
//     dispatch({type: 'SUCCESS'});
// }