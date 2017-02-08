/**

 * Created by juliocvila on 1/31/17.

 */

const defaultState = {fetching: false, fetched: false, data: [], error: null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_PENDING':
            return {...state, fetching: true};
        case 'FETCH_PRODUCTS_FULFILLED':
            return {...state, fetching: false, fetched: true, data: action.payload.data};
        case 'FETCH_PRODUCTS_REJECTED':
            return {...state, fetching: false, error: action.payload};
        default:
            return state;
    }
}