import { FaIoxhost } from "react-icons/fa"

const initialState = {
    isLoading: false,
    products: [],
    shoppingCart: [],
    error: '',
    subtotal_amount: 0,
    total: 0,
    tax: 0
}

export const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case 'GET_PRODUCTS':
            return {
                ...state,
                isLoading: true,
                products: action.payload
            }
        
        case 'SUCCESS':
            return {
                ...state,
                isLoading: false
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, action.payload]
            }

        case 'CALCULATE_LINE_ITEMS':
            let tax = 0.26;
            let subtotal_amount = 0;
            for(let i = 0; i < state.shoppingCart.length; i++)
            {
                subtotal_amount += state.shoppingCart[i].price * state.shoppingCart[i].quanity;
            }
            
            for(let i = 0; i < state.shoppingCart.length; i++)
            {
                if(state.shoppingCart[i].product_type === 'Edible')
                {
                    tax += 0.20;
                    break;
                }
                else if(state.shoppingCart[i].thca >= 35)
                {
                    tax += 0.25;
                    break;
                }
            }
            tax *= subtotal_amount;
            let total = tax + subtotal_amount;
           return {
               ...state,
                tax,
                subtotal_amount,
                total
           }
        default:
            return state;
    }
}