import React from 'react';
import {Product} from '../Interfaces';
import {FaPrescriptionBottleAlt, FaJoint, FaCookieBite} from 'react-icons/fa';
import {GiSodaCan, GiSmokeBomb} from 'react-icons/gi';

export const getProductType = (product: Product) => {
    switch(product!.product_type)
    {
        case 'Flower':
            return <FaPrescriptionBottleAlt/>
        case 'Preroll':
            return <FaJoint/>
        case 'Edible':
            return <FaCookieBite/>
        case 'Beverage':
            return <GiSodaCan/>
        case 'Vape':
            return <GiSmokeBomb/>
        default: 
            return null;
    }
}