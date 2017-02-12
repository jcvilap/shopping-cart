const defaultState = {fetching: false, fetched: false, data: [], error: null};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT_DETAILS_PENDING':
            return {...state, fetching: true};
        case 'FETCH_PRODUCT_DETAILS_FULFILLED':
            return {...state, fetching: false, fetched: true, data: action.payload.data};
        case 'FETCH_PRODUCT_DETAILS_REJECTED':
            return {...state, fetching: false, error: action.payload};
        default:
            return state;
    }
}