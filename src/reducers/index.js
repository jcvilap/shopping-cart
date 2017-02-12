import {combineReducers} from 'redux';
import products from './products';
import productDetails from './productDetails';

export default combineReducers({
    products,
    productDetails
});