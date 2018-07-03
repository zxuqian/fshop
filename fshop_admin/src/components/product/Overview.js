import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
//import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { fetchProducts, selectProduct } from '../../actions/product'

class Overview extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="overview column is-3">
                <div className="ov-header">
                    <button className="button is-primary">添加产品</button>
                </div>
                <ul>
                    {
                        Object.keys(this.props.products).map((key) => {
                            return (<li key={ key } onClick={ this.props.itemClicked.bind(this, key) }>
                                <div className="ov-item active-item">
                                    <div className="ov-title">{ this.props.products[key].name }</div>
                                    <div className="ov-description">{ this.props.products[key].description }</div>
                                </div>
                            </li>)
                        })
                    }
                </ul>
            </section>
        )
    }
}


export default Overview