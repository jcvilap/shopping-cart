/**
 * Created by juliocvila on 2/1/17.
 */
import {combineReducers} from 'redux';
import products from './products';

/**
 * Combine here all the app reducers
 */
export const reducer = combineReducers({
   products
});