import React, { Component } from 'react';

import AddProductForm from './product/AddProductForm';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Main extends Component {
    render() {
        return (
            <section className="main column is-7">
                <div className="header">
                    <h1>添加产品</h1>
                </div>
                <div className="content-body">
                    <AddProductForm />
                </div>
            </section>
        )
    }
}
export default Main;