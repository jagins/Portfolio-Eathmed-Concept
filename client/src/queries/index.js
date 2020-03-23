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

export const GET_BRANDS = gql`
    {
        companies {
            id
            company_name
        }
    }
`;