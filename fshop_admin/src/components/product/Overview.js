import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import { withRouter } from 'react-router-dom'
//import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { fetchProducts, selectProduct } from '../../actions/product'

class Overview extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProducts()
    }

    itemClicked(index) {
        this.props.selectProduct(index)
    }

    render() {
        return (
            <section className="overview column is-3">
                <div className="ov-header">
                    <button className="button is-primary">添加产品</button>
                </div>
                <ul>
                    {
                        this.props.products.map((product, index) => {
                            return (<li key={ product.id } onClick={this.itemClicked.bind(this, index)}>
                                <div className="ov-item active-item">
                                    <div className="ov-title">{ product.name }</div>
                                    <div className="ov-description">{ product.description }</div>
                                </div>
                            </li>)
                        })
                    }
                </ul>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.product.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: bindActionCreators(fetchProducts, dispatch),
        selectProduct: bindActionCreators(selectProduct, dispatch)
    }
}

//withRouter(connect(mapStateToProps, mapDispatchToProps)(Overview))
export default connect(mapStateToProps, mapDispatchToProps)(Overview)