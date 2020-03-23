import React from 'react';
import {GET_BRANDS} from '../queries';
import {useQuery} from '@apollo/react-hooks';

function Brands()
{
    const {loading, data, error} = useQuery(GET_BRANDS);
    return (
        <div>
            {loading ? <p>Loading...</p> : (
                data.companies.map(company =>
                    <div className='card'>
                        <h3>{company.company_name}</h3>
                    </div>)
            )}
        </div>
    )
}

export default Brands;