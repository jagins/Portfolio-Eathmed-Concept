import React from 'react';
import '../Styles/InfoPage.css';

function ProductsPage()
{
    return (
        <div className='products top'>
            <h1>Products</h1>
            <p>EarthMed is dedicated to providing the highest quality cannabis to our customers. There are several different ways to take medical cannabis available.</p>

            <ul className='products-list'>
                <li>Flowers – The flowering buds from Indica, Sativa, and Hybrid Cannabis strains.</li>
                <li>Concentrates / Extracts – Created in laboratories, there are several resins and butters available in pure compound form.</li>
                <li>Edibles / Oral – Patients can take Cannabis orally from tablets that are created in a laboratory.</li>
            </ul>
        </div>
    )
}

export default ProductsPage;