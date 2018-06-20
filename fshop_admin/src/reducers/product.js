import { ADD_PRODUCT } from '../actions/product'

const products = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            console.log(action);
            return [
                ...state,
                action.product
            ]
        default:
            return state;
    }

}

export default products;

