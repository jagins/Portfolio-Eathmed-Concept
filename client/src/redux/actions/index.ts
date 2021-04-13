import axios from 'axios';
let currentType ='';
export const getProducts = (type: string) => (dispatch: any) => {
    currentType = type;
    axios.get(`${process.env.REACT_APP_URL}/products?product_type=${type}`)
    .then(res => {
        dispatch({type: 'GET_PRODUCTS', payload: res.data})
        dispatch({type: 'SUCCESS'});
    })
    .catch(err => console.log(err));
}

export const filterCurrentProducts = (strainType: Array<any>, checkboxs: Object) => (dispatch: any) => {
        let string = '';
        let boxes = Object.keys(checkboxs)
        if(strainType.length > 0 && boxes.length > 0) {
            for(let i = 0; i < strainType.length; i++) {
                if(strainType[i].value)
                    string += strainType[i].name + ',';
            }

            let bString = '';
            for(let j = 0; j < boxes.length; j++) {
                bString += boxes[j] + ',';
            }

            axios.get(`${process.env.REACT_APP_URL}/products?product_type=${currentType}&strain_type=${string}&company_name=${bString}`)
            .then(res => {
                dispatch({type: 'GET_PRODUCTS', payload: res.data})
                dispatch({type: 'SUCCESS'});
            })
            .catch(err => console.log(err));
        }
        else if(boxes.length > 0) {
            let bString = '';
            for(let j = 0; j < boxes.length; j++) {
                bString += boxes[j] + ',';
            }

            axios.get(`${process.env.REACT_APP_URL}/products?product_type=${currentType}&company_name=${bString}`)
            .then(res => {
                dispatch({type: 'GET_PRODUCTS', payload: res.data})
                dispatch({type: 'SUCCESS'});
            })
            .catch(err => console.log(err));
        }
        else {
            for(let i = 0; i < strainType.length; i++) {
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

export const addProductToCart = (product: Object, quanity: number) => (dispatch: any) => {
    dispatch({type: 'ADD_TO_CART', payload: {...product, quanity}})
}

export const calulcateLineItems = () => (dispatch: any) => {
    dispatch({type: 'CALCULATE_LINE_ITEMS'});
}

export const increaseCartItem = (product: Object) => (dispatch: any) => {
    dispatch({type: 'INCREASE_CART_ITEM', payload: product});
    dispatch({type: 'CALCULATE_LINE_ITEMS'});
}

export const decreaseCartItem = (product: Object) => (dispatch: any) => {
    dispatch({type: 'DECREASE_CART_ITEM', payload: product});
    dispatch({type: 'CALCULATE_LINE_ITEMS'});
}

export const removeCartItem = (product: Object) => (dispatch: any) => {
    dispatch({type: 'REMOVE_CART_ITEM', payload: product});
    dispatch({type: 'CALCULATE_LINE_ITEMS'});
}

export const deleteCart = () => (dispatch: any) => {
    dispatch({type: 'DELETE_CART'});
}