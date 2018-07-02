import { 
    ADD_PRODUCT, 
    FETCH_PRODUCTS,
    SELECT_PRODUCT
 } from '../actions/product'

let initialState = {
    isFetching: false,
    items: [],
    currentSelectedProductIndex: -1
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
        case SELECT_PRODUCT:
            return {
                ...state,
                currentSelectedProductIndex: action.index
            }
        default:
            return state;
    }

}

export default product;

