import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Overview extends Component {
    render() {
        return (
            <section className="overview column is-3">
                <div className="ov-header">
                    <button className="button is-primary">添加产品</button>
                </div>
                <ul>
                    <li>
                        <div className="ov-item active-item">
                            <div className="ov-title">这是产品一</div>
                            <div className="ov-description">对于产品一的描述,非常长的一段描述</div>
                        </div>
                    </li>
                    <li>
                        <div className="ov-item">
                            <div className="ov-title">这是产品一</div>
                            <div className="ov-description">对于产品一的描述</div>
                        </div>
                    </li>
                    <li>
                        <div className="ov-item">
                            <div className="ov-title">这是产品一</div>
                            <div className="ov-description">对于产品一的描述</div>
                        </div>
                    </li>
                    <li>
                        <div className="ov-item">
                            <div className="ov-title">这是产品一</div>
                            <div className="ov-description">对于产品一的描述</div>
                        </div>
                    </li>
                    <li>
                        <div className="ov-item">
                            <div className="ov-title">这是产品一</div>
                            <div className="ov-description">对于产品一的描述</div>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}
export default Overview;