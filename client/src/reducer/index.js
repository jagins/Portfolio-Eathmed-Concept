const initialState = {
    isLoading: false,
    products: [],
    shoppingCart: [],
    subtotal_amount: 0.0,
    tax: {
        state: 0.1325,
        below_35: 0.10,
        edible: 0.20,
        above_35: 0.25
    },
    tax_amount: 0,
    total_amount: 0.0,
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