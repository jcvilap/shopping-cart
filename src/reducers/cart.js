export default (state = new Map(), action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            let i = state.get(action.payload.sku) || {value: action.payload, count: 0};
            i.count++;
            state.set(i.value.sku, i);
            return Object.assign({}, state);
        case 'REMOVE_ITEM_TO_CART':
            let item = state.get(action.payload.sku) || {value: action.payload, count: 0};
            item.count && item.count--;
            state.set(item.value.sku, item);
            return Object.assign({}, state);
        default:
            return state;
    }
}
