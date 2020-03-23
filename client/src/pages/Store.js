import React, {useState} from 'react';
import Logo from '../images/earthmed-site-logo-bigger.png';
import {Tabs, Tab} from 'react-bootstrap';
import Featured from '../components/Featured';
import Brands from '../components/Brands';
import '../Styles/Store.css';

function Store()
{
    const [tab, setTab] = useState('featured');
    return (
        <div>
            <div className='logo'>
                <img src={Logo} alt='Eathmed logo'/>
            </div>
            <div className='tab-container'>
                <Tabs activeKey={tab} onSelect={tab => setTab(tab)} variant='pills' className='tabs'>
                    <Tab eventKey='featured' title='Featured Products'> <Featured/> </Tab>
                    <Tab eventKey='brands' title='Brands'> <Brands/> </Tab>
                    <Tab eventKey='shop' title='Shop'> Shop </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default Store;