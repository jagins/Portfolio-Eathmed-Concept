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
export function GET_PRODUCT_BY_ID(id)
{
    const PRODUCT_BY_ID = gql`
    {
        products(where: {id: {_eq: ${id}}}) {
            price
            product_name
        }
    }
`;

    return PRODUCT_BY_ID;
}