import {combineReducers} from 'redux';
import products from './products';
import productDetails from './productDetails';
import cart from './cart';

export default combineReducers({
    products,
    productDetails,
    cart
});