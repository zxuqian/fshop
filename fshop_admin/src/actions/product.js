import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:8080/product'
})

export const BEFORE_REQUEST = 'BEFORE_REQUEST'
export const AFTER_REQUEST = 'AFTER_REQUEST'
export const REQEUST_FAILED = 'REQUEST_FAILED'
export const REQUEST_SUCCEED = 'REQUEST_SUCCEED'

// Product-related actions
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const SELECT_PRODUCT = 'SELECT_PRODUCT'
//export const FETCH_PRODUCT_BY_ID = 'FETCH_PRODUCT_BY_ID'
//export const PRODUCT_ADDED = 'PRODUCT_ADDED'

export const addProduct = product => {
    // return {
    //     type: ADD_PRODUCT, 
    //     product
    // }
    return async dispatch => {
        try {
            const response = await request.post("/", product)
            dispatch({
                type: ADD_PRODUCT,
                product: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchProducts = () => {
    return async dispatch => {
        try {
            const response = await request.get("/")
            dispatch({
                type: FETCH_PRODUCTS,
                products: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const selectProduct = (index) => {
    return {
        type: SELECT_PRODUCT,
        index
    }
}

// export const fetchProductById = (id) => {
//     return async dispatch => {
//         try {
//             const response = await request.get(`/${id}`)
//             dispatch({
//                 type: FETCH_PRODUCT_BY_ID,
//                 product: response.data
//             })
//         } catch (error) {
//             // handle errors
//         }
//     }
// }
