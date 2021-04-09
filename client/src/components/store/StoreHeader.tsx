import React, {useState, useEffect} from 'react';
import {Dropdown} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/actions';
import DropDownItem from './DropDownItem';

interface Props {
    isLoading: boolean,
    products: Array<any>,
    getProducts: (menu: string) => void
}

interface State {
    isLoading: boolean,
    products: Array<any>,
}

function StoreHeader(props: Props)
{
    const [menu, setMenu] = useState('Flower');
    const {isLoading, products, getProducts} = props;

    useEffect(() => {
        getProducts(menu)
    }, [menu, getProducts])
    return (
        <header className='store-header'>
            <Dropdown>
                <Dropdown.Toggle variant='success' id='dropdown'>{menu}</Dropdown.Toggle>
                <Dropdown.Menu className='dropdown-menu'>
                    <Dropdown.Header>Choose a Form</Dropdown.Header>
                        <DropDownItem onSelect={() => setMenu('Flower')} buttonTitle='Flower'/>
                        <DropDownItem onSelect={() => setMenu('Preroll')} buttonTitle='Prerolls'/>
                        <DropDownItem onSelect={() => setMenu('Vape')} buttonTitle='Vapes'/>
                        <DropDownItem onSelect={() => setMenu('Concentrates')} buttonTitle='Concentrates'/>
                        <DropDownItem onSelect={() => setMenu('Edible')} buttonTitle='Edibles'/>
                        <DropDownItem onSelect={() => setMenu('Beverage')} buttonTitle='Beverages'/>
                </Dropdown.Menu>
            </Dropdown>

        {!isLoading && products.length > 0 ? <p>Showing {products.length} results</p> : <p>Showing 0 results</p>}
        </header>
    )
}

const mapStateToProps = (state: State) => {
    return {
        isLoading: state.isLoading,
        products: state.products
    }
}

export default connect(mapStateToProps, {getProducts})(StoreHeader);