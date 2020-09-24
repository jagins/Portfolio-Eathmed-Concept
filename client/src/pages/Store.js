import React from 'react';
import logo from '../images/earthmed-site-logo-bigger.png';
import Button from 'react-bootstrap/Button';
import StoreHeader from '../components/StoreHeader';
import StoreSidebar from '../components/StoreSidebar';
import StoreProducts from '../components/StoreProducts';
import {useHistory} from 'react-router-dom';
import '../Styles/Store.css';

function Store()
{
    const history = useHistory();
    return (
        <section className='store'>
            <div className='login'>
                <Button variant='success' onClick={() => history.push('/store/login')}>Login/Register</Button>
            </div>
            <img src={logo} alt='Earthmed Logo'/>
            <StoreHeader/>
           
            <div className='showcase'>
                <StoreSidebar/>
                <StoreProducts/>
            </div>
        </section>
    )
}

export default Store;