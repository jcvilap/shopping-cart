import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducer from './reducers';

export const store = createStore(reducer, applyMiddleware(promise(), logger()));