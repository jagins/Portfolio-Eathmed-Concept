// import {testArray} from '../utils/testProducts';
import axios from 'axios';
let currentType ='';
export const getProducts = (type) => dispatch =>
{
    currentType = type;
    // axios.get(`${process.env.REACT_APP_URL}/products?product_type=${type}`)
    axios.get(`http://localhost:5000/api/products?product_type=${type}`)
    .then(res => {
        dispatch({type: 'GET_PRODUCTS', payload: res.data})
        dispatch({type: 'SUCCESS'});
        
    })
    .catch(err => console.log(err));
}

export const filterCurrentProducts = (strainType, checkboxs) => dispatch =>
{
        let string = '';
        let boxes = Object.keys(checkboxs)
        console.log(boxes)
        if(strainType.length > 0 && boxes.length > 0)
        {
            for(let i = 0; i < strainType.length; i++)
            {
                if(strainType[i].value)
                    string += strainType[i].name + ',';
            }

            let bString = '';
            for(let j = 0; j < boxes.length; j++)
            {
                bString += boxes[j] + ',';
            }

            // axios.get(`${process.env.REACT_APP_URL}/products?product_type=${currentType}&strain_type=${string}&company_name=${bString}`)
            axios.get(`http://localhost:5000/api/products?product_type=${currentType}&strain_type=${string}&company_name=${bString}`)
            .then(res => {
                dispatch({type: 'GET_PRODUCTS', payload: res.data})
                dispatch({type: 'SUCCESS'});
            })
            .catch(err => console.log(err));
        }
        else if(boxes.length > 0)
        {
            let bString = '';
            for(let j = 0; j < boxes.length; j++)
            {
                bString += boxes[j] + ',';
            }

            // axios.get(`${process.env.REACT_APP_URL}/products?product_type=${currentType}&company_name=${bString}`)
            axios.get(`http://localhost:5000/api/products?product_type=${currentType}&company_name=${bString}`)
            .then(res => {
                dispatch({type: 'GET_PRODUCTS', payload: res.data})
                dispatch({type: 'SUCCESS'});
            })
            .catch(err => console.log(err));
        }
        else 
        {
            for(let i = 0; i < strainType.length; i++)
            {
                if(strainType[i].value)
                    string += strainType[i].name + ',';
            }
            axios.get(`${process.env.REACT_APP_URL}/products?product_type=${currentType}&strain_type=${string}`)
            .then(res => {
                dispatch({type: 'GET_PRODUCTS', payload: res.data})
                dispatch({type: 'SUCCESS'});
            })
            .catch(err => console.log(err));
        }
}