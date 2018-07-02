import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Main from '../Main'

class ProductDetails extends Component {

    constructor(props) {
        super(props)
        this.id = props.match.params.id
    }

    render() {
        let isSelected = this.props.currentSelectedProductIndex != -1
        let product = {}
        if (isSelected) {
            product = this.props.items[this.props.currentSelectedProductIndex]
        } else {
            //product = this.props.items.fi
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
        currentSelectedProductIndex: state.product.currentSelectedProductIndex,
        items: state.product.items
    }
}

//withRouter(connect(mapStateToProps)(ProductDetails))
export default withRouter(connect(mapStateToProps)(ProductDetails))