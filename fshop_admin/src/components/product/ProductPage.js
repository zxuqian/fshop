import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import Overview from './Overview'

import ProductDetails from './ProductDetails'
import ProductForm from './ProductForm'

class ProductPage extends Component {

    constructor(props) {
        super(props)
        //this.state = { product: {} }

        //this.showDetails = this.showDetails.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        //this.product = nextProps.location.state.product
        //this.product = nextProps.items[nextProps.currentSelectedProductIndex]
    }

    // showDetails(product) {
    //     this.setState({
    //         product: product
    //     })
    // }

    render() {
        // <Overview showDetails={ this.showDetails } />
        return (
            <Fragment>
                <Overview />
                <Route path="/product/:id" component={ ProductDetails } />
            </Fragment>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        currentSelectedProductIndex: state.product.currentSelectedProductIndex,
        items: state.product.items
    }
}

export default withRouter(connect(mapStateToProps)(ProductPage))