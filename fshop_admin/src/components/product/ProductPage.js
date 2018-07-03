import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { fetchProducts, selectProduct } from '../../actions/product'

import Overview from './Overview'
import ProductDetails from './ProductDetails'
import ProductForm from './ProductForm'

class ProductPage extends Component {

    constructor(props) {
        super(props)
        this.itemClicked = this.itemClicked.bind(this)
        this.findProductById = this.findProductById.bind(this)
        //this.state = { product: {} }

        //this.showDetails = this.showDetails.bind(this)
    }

    componentDidMount() {
        this.props.fetchProducts()
    }

    itemClicked(id) {
        this.props.selectProduct(id)
        //let selectedProduct = this.props.products[index]
        this.props.history.push(`/product/${id}`)
    }

    findProductById(id) {
        return this.props.products[id]
    }

    //componentWillReceiveProps(nextProps) {
        //this.product = nextProps.location.state.product
        //this.product = nextProps.items[nextProps.currentSelectedProductIndex]
    //}

    // showDetails(product) {
    //     this.setState({
    //         product: product
    //     })
    // }

    render() {
        // <Overview showDetails={ this.showDetails } />
        return (
            <Fragment>
                <Overview products={ this.props.products } itemClicked={ this.itemClicked } />
                <Route path="/product/:id" render={ () => <ProductDetails findProductById={ this.findProductById } /> } />
            </Fragment>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        currentSelectedProductId: state.product.currentSelectedProductId,
        products: state.product.entities.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: bindActionCreators(fetchProducts, dispatch),
        selectProduct: bindActionCreators(selectProduct, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPage))