import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { fetchProducts } from '../../actions/product'

class Overview extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProducts()
    }
    render() {
        return (
            <section className="overview column is-3">
                <div className="ov-header">
                    <button className="button is-primary">添加产品</button>
                </div>
                <ul>
                    {
                        this.props.products.map(product => {
                            return (<li key={ product.id }>
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
        fetchProducts: bindActionCreators(fetchProducts, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)