import {gql} from 'apollo-boost';

export const GET_FEATURED = gql`
    {
        products(limit: 5){
            id
            price
            product_name
        }
    }
`;