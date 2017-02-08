import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import store from '../../store';
import {PRODUCT_URL} from './constants';

class ProductList extends React.Component {
    render() {
        let template = (
            <div>error</div>
        );
        if(this.props.products.fetching) {
            template =  (
                <div>loading</div>
            );
        } else {
            this.data = this.props.products.data;
            template = (
                <div>{this.renderProducts(this.data.products)}</div>
            );
        }

        return template;
    }

    renderProducts (products) {
        let count = 0;
        return products.map(product => {
            return (
                <div key={count++}>{JSON.stringify(product.toString())}</div>
            );
        });
    }

    static getProducts() {
        store.dispatch({
            type: 'FETCH_PRODUCTS',
            payload: axios.get(PRODUCT_URL)
        });
    }
}

function mapStateToProps({products}) {
    return {products};
}

export default connect(mapStateToProps)(ProductList);