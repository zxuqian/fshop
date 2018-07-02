import React, { Component } from 'react';
import ProductForm from './product/ProductForm';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="main column is-7">
                <div className="header">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="content-body">
                    {this.props.children}
                </div>
            </section>
        )
    }
}
export default Main;