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
                products: action.payload
            }
        default:
            return state;
    }
}