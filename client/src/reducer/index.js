const initialState = {
    isLoading: false,
    products: [],
    shoppingCart: [],
    error: ''
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
           return {
               ...state,
               subtotal_amount: state.shoppingCart.reduce((total, currentItem) => total + currentItem.price),
           }
        default:
            return state;
    }
}