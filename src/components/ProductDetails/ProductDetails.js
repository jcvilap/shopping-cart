import React from 'react';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import store from '../../store';
import {PRODUCT_DETAILS_URL} from './constants';
import axios from 'axios';

class ProductDetails extends React.Component {
    render() {
        if (this.props.productDetails.error || this.props.productDetails.fetching) {
            return (<div><CircularProgress style={{padding: '30%'}} size={80} thickness={10}/></div>);
        } else {
            this.data = this.props.productDetails.data;
            return (
                <div>
                    {JSON.stringify(this.data)}
                </div>
            );
        }
    }

    static getProductDetails(nextState) {
        store.dispatch({
            type: 'FETCH_PRODUCT_DETAILS',
            payload: axios.get(PRODUCT_DETAILS_URL.replace('{{}}', nextState.params.sku))
        });
    }
}

export default connect(({productDetails}) => ({productDetails}))(ProductDetails);