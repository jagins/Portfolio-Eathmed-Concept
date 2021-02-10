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

        case 'INCREASE_CART_ITEM':
            return {
                ...state,
                shoppingCart: state.shoppingCart.map(function(item) {
                    if(item.product_name === action.payload.product_name) {
                        return {
                            ...item,
                            quanity: item.quanity + 1
                        }
                    }
                    return item;
                })
            }
        
        case 'DECREASE_CART_ITEM':
            const shoppingCart = state.shoppingCart.map(function(item) {
                if(item.product_name === action.payload.product_name) {
                    if(item.quanity <= 0)
                        return {
                            ...item,
                            quanity: 0
                        }
                    else
                        return {
                            ...item,
                            quanity: item.quanity - 1
                        }
                }
                else 
                    return item;
            })
            return {
                ...state,
                shoppingCart:  shoppingCart.filter(item => item.quanity > 0) 
            }

        case 'REMOVE_CART_ITEM':
            return {
                ...state,
                shoppingCart: state.shoppingCart.filter(item => item.product_name !== action.payload.product_name)
            }
        default:
            return state;
    }
}