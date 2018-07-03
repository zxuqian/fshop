import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Main from '../Main'
import { selectProduct } from '../../actions/product'
import { bindActionCreators } from 'redux';

class ProductDetails extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        // let isSelected = this.props.currentSelectedProductId != -1
        // let product = {}
        // if (isSelected) {
        //     product = this.props.products[this.props.currentSelectedProductId]
        // } else {
        //     //product = this.props.items.fi
        //     return null
        // }
        let id = this.props.match.params.id
        let product = this.props.findProductById(id)

        // If brwoser is refreshing, due to the nature of client side javascript,
        // Product can not be obtained because the parent ProductPage component
        // has not fetched products yet, so null should be returned to prevent
        // rendering, and when the products loaded, it will render again and this
        // time will be correct.
        if(!product) {
            return null
        }
        return (
            <Main title="产品详情">
                <h1 className="title"></h1>
                <p>产品名称：{product.name}</p>
                <p>数量：{product.count}</p>
                <p>价格：{product.price}</p>
                <p>产品描述：{product.description}</p>
            </Main>
        )

    }
}
//this.isShowingDetails && <ProductDetails product={this.state.product} />

function mapStateToProps(state) {
    return {
        currentSelectedProductId: state.product.currentSelectedProductId,
        products: state.product.entities.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectProduct: bindActionCreators(selectProduct, dispatch)
    }
}

//withRouter(connect(mapStateToProps)(ProductDetails))
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDetails))