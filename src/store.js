/**
 * Created by juliocvila on 1/31/17.
 */
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducer from './reducers';

export default createStore(reducer, applyMiddleware(promise(), logger()));