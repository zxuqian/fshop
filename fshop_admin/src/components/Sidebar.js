import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Sidebar extends Component {
    render() {
        return (
            <aside className="menu hero is-fullheight column is-2">
                <ul className="menu-list">
                    <li><a href="#"><FontAwesomeIcon className="font-icon" icon="list-ul" />产品管理</a></li>
                    <li><a href="#"><FontAwesomeIcon className="font-icon" icon="cubes" />类别管理</a></li>
                    <li><a href="#"><FontAwesomeIcon className="font-icon" icon="dollar-sign" />订单管理</a></li>
                    <li><a href="#"><FontAwesomeIcon className="font-icon" icon="user" />用户管理</a></li>
                </ul>
            </aside>
        )
    }
}
export default Sidebar;