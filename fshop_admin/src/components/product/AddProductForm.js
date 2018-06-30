import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import { withRouter } from 'react-router-dom'
import '../../styles/product/AddProductForm.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import axios from 'axios'

import Main from '../Main'

import { addProduct } from '../../actions/product'

class AddProductForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: {
                name: '',
                count: '',
                price: '',
                description: ''
            }
        }
        //this.dispatch = this.props.dispatch
        

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        // this.request = axios.create({
        //     baseURL: 'http://localhost:8080/product'
        // })
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({
            product: {
                ...this.state.product,
                [name]: value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.addProduct(this.state.product)
        //this.dispatch(addProduct(this.state.product))

        // console.log(this.state)
        // // make request
        // try {
        //     const response = await this.request.post("/", this.state.product)
        //     console.log(response)
        // } catch (error) {
        //     alert(error)
        // }
    }

    render() {
        return (
            <Main title="添加产品">
                <form className="add-item-form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">产品名称</label>
                        <div className="control">
                            <input
                                type="text"
                                value={this.state.product.name}
                                onChange={this.handleInputChange}
                                className="input"
                                name="name" />
                        </div>
                    </div>

                    <div className="columns">
                        <div className="field column">
                            <label className="label">数量</label>
                            <p className="control">
                                <input
                                    type="text"
                                    value={this.state.product.count}
                                    onChange={this.handleInputChange}
                                    className="input"
                                    name="count" />
                            </p>
                        </div>

                        <div className="field column">
                            <label className="label">价格</label>
                            <p className="control">
                                <input
                                    type="number"
                                    value={this.state.product.price}
                                    onChange={this.handleInputChange}
                                    className="input"
                                    name="price" />
                            </p>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">产品描述</label>
                        <div className="control">
                            <textarea
                                value={this.state.product.description}
                                onChange={this.handleInputChange}
                                className="textarea"
                                name="description"
                                rows="10">
                            </textarea>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link">提交</button>
                        </div>
                        <div className="control">
                            <button className="button">取消</button>
                        </div>
                    </div>

                </form>
            </Main>

        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        addProduct: bindActionCreators(addProduct, dispatch)
    }
}

//withRouter(connect(mapStateToProps, mapDispatchToProps)(AddProductForm))
export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm)