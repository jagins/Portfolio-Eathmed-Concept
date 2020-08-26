const initialState = {
    isLoading: false,
    products: [],
    productType: '',
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
        default:
            return state;
    }
}