import React,{useState} from 'react';
import {FaPrescriptionBottleAlt, FaJoint, FaCookieBite} from 'react-icons/fa';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import {IconContext} from 'react-icons';
import {GiSodaCan, GiSmokeBomb} from 'react-icons/gi';
import {useHistory} from 'react-router-dom';

function StoreProductCard(props) 
{ 
    const [style] = useState({marginRight: '5px'});
    const history = useHistory();

    const getProductTypeIcon = () => {
        switch(props.product.product_type)
        {
            case 'Beverage':
                return <GiSodaCan className='product-icon' style={style} />
            case 'Edible':
                return <FaCookieBite className='product-icon' style={style} />
            case 'Vape': 
                return <GiSmokeBomb className='product-icon' style={style} />
            case 'Preroll':
                return <FaJoint className='product-icon' style={style} />
            default:
                return <FaPrescriptionBottleAlt className='product-icon' style={style} />
        }
    }
    return (
            <div className='product-card' onClick={() => history.push(`/store/products/${props.product.id}`)}>
                <Chip className='product-chip' label={props.product.strain_type} variant='outlined' avatar={<Avatar className={props.product.strain_type}>{props.product.strain_type[0]}</Avatar>} />
                <img src={props.product.image} alt={props.product.name}/>
                <hr />
                <div className='product-info'>
                    <h5>{props.product.product_name}</h5>
                    <h6>{props.product.size}g | ${props.product.price}</h6>
                </div>
                <IconContext.Provider value={{ size: '1.4rem' }}>
                    <div className='product-card-bottom'>
                        <p className='product-type'>{getProductTypeIcon()}{props.product.product_type}</p>
                        <p>THCA: {props.product.thca}%</p>
                    </div>
                </IconContext.Provider>
            </div>
    )
}

export default StoreProductCard;