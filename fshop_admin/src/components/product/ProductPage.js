import React, { Component, Fragment } from 'react'
import Overview from './Overview'
import AddProductForm from './AddProductForm'

class ProductPage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <Overview />
                <AddProductForm />
            </Fragment>
        )
    }
}

export default ProductPage