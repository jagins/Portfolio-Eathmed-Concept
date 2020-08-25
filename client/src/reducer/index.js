const initialState = {
    isLoading: false,
    products: [],
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
        
        case 'CHANGE_TYPE': 
            return {
                ...state,
                isLoading: true,
                products: state.products.filter(product => product.product_type === action.payload)
            }
        
        case 'CHANGE_STRAIN_TYPE':
            return {
                ...state,
                isLoading: true,
                products: state.products.filter(product => product.strain_type === action.payload)
            }
        default:
            return state;
    }
}