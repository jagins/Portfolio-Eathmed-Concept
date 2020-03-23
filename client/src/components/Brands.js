import React from 'react';
import {GET_BRANDS} from '../queries';
import {useQuery} from '@apollo/react-hooks';
import '../Styles/Store.css';

function Brands()
{
    const {loading, data, error} = useQuery(GET_BRANDS);
    return (
        <div>
            <h3 className='title'>Brands</h3>
            {loading ? <p>Loading...</p> : (
               <div className='brands'>
                  {data.companies.map(company =>
                    <div className='brand' key={company.id}>
                        <h3>{company.company_name}</h3>
                    </div>)} 
               </div>
            )}
        </div>
    )
}

export default Brands;