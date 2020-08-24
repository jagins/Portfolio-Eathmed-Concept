import React, {useState} from 'react';
import {Button, Dropdown} from 'react-bootstrap';
import {connect} from 'react-redux';

function StoreHeader(props)
{
    const [menu, setMenu] = useState('Flower');
    const {isLoading, products} = props
    return (
        <header className='store-header'>
            <Dropdown>
                <Dropdown.Toggle variant='success'>{menu}</Dropdown.Toggle>
                <Dropdown.Menu className='dropdown-menu'>
                    <Dropdown.Header>Choose a Form</Dropdown.Header>
                        <Dropdown.Item onSelect={() => setMenu('Flower')}><Button variant='outline-success'>Flower</Button></Dropdown.Item>
                        <Dropdown.Item onSelect={() => setMenu('Prerolls')}><Button variant='outline-success'>Prerolls</Button></Dropdown.Item>
                        <Dropdown.Item onSelect={() => setMenu('Vapes')}><Button variant='outline-success'>Vapes</Button></Dropdown.Item>
                        <Dropdown.Item onSelect={() => setMenu('Concentrates')}><Button variant='outline-success'>Concentrates</Button></Dropdown.Item>
                        <Dropdown.Item onSelect={() => setMenu('Edibles')}><Button variant='outline-success'>Edibles</Button></Dropdown.Item>
                        <Dropdown.Item onSelect={() => setMenu('Beverages')}><Button variant='outline-success'>Beverages</Button></Dropdown.Item>
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

export default connect(mapStateToProps, {})(StoreHeader);