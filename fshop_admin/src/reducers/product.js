import { 
    ADD_PRODUCT, 
    FETCH_PRODUCTS
 } from '../actions/product'

let initialState = {
    isFetching: false,
    items: []
};

const product = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                items: [...state.items, action.product]
            }
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: action.products
            }  
        default:
            return state;
    }

}

export default product;

