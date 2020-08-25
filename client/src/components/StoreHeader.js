import React, {useState, useEffect} from 'react';
import {Button, Dropdown} from 'react-bootstrap';
import {connect} from 'react-redux';
import {filterType} from '../actions';

function StoreHeader(props)
{
    const [menu, setMenu] = useState('Flower');
    const {isLoading, products, filterType} = props;

    useEffect(() => {
        filterType(menu)
    }, [menu])

    console.log(products);
    return (
        <header className='store-header'>
            <Dropdown>
                <Dropdown.Toggle variant='success'>{menu}</Dropdown.Toggle>
                <Dropdown.Menu className='dropdown-menu'>
                    <Dropdown.Header>Choose a Form</Dropdown.Header>
                        <Dropdown.Item onSelect={() => setMenu('Flower')}><Button variant='outline-success'>Flower</Button></Dropdown.Item>
                        <Dropdown.Item onSelect={() => setMenu('Preroll')}><Button variant='outline-success'>Prerolls</Button></Dropdown.Item>
                        <Dropdown.Item onSelect={() => setMenu('Vape')}><Button variant='outline-success'>Vapes</Button></Dropdown.Item>
                        <Dropdown.Item onSelect={() => setMenu('Concentrates')}><Button variant='outline-success'>Concentrates</Button></Dropdown.Item>
                        <Dropdown.Item onSelect={() => setMenu('Edible')}><Button variant='outline-success'>Edibles</Button></Dropdown.Item>
                        <Dropdown.Item onSelect={() => setMenu('Beverage')}><Button variant='outline-success'>Beverages</Button></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        {!isLoading && products.length > 0 ? <p>Showing {products.length} results</p> : <p>Showing 0 results</p>}
        </header>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        products: state.products
    }
}

export default connect(mapStateToProps, {filterType})(StoreHeader);