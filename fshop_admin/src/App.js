import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="test columns">
        <aside className="menu hero is-fullheight column is-2">
          <ul className="menu-list">
            <li><a href="#">产品管理</a></li>
            <li><a href="#">类别管理</a></li>
            <li><a href="#">订单管理</a></li>
            <li><a href="#">用户管理</a></li>
          </ul>
        </aside>
        <section className="overview column is-2">
          <div className="ov-header">
            <button className="button is-primary">添加产品</button>
          </div>
          <ul>
            <li>
              <div className="ov-item">
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
        <section className="main column is-8">
          <div className="header">
            <h3>添加产品</h3>
          </div>
          <div className="content-body">
            <form className="add-item-form">
              <div className="field">
                <lable className="label">产品名称</lable>
                <div className="control">
                  <input type="text" className="input" name="name" />
                </div>
              </div>

              <div className="columns">
                <div className="field column">
                  <label className="label">数量</label>
                  <p className="control">
                    <input type="text" name="count" id="" className="input" />
                  </p>
                </div>

                <div class="field column">
                  <label className="label">价格</label>
                  <p class="control">
                    <input class="input is-success" type="email" placeholder="Email" value="alex@smith.com" />
                  </p>
                </div>
              </div>

            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
