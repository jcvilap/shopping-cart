/**
 * Created by juliocvila on 1/29/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {store} from '../../reducers/products';
import {PRODUCT_URL} from './constants';

class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.getProducts();
        console.log(this.props);
    }

    render() {
        return (
            <div>ProductList</div>
        );
    }

    getProducts() {
        store.dispatch({
            type: 'FETCH_PRODUCTS',
            payload: axios.get(PRODUCT_URL)
        });
    }
}

export default connect(store => {products: store.products})(ProductList);