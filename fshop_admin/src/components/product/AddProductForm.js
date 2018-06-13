import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class AddProductForm extends Component {
    render() {
        return (
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
                            <input class="input" type="number" name="price" />
                        </p>
                    </div>
                </div>

                <div className="field">
                    <lable className="label">产品描述</lable>
                    <div className="control">
                        <textarea className="textarea" name="description" rows="10">
                        </textarea>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">提交</button>
                    </div>
                    <div class="control">
                        <button class="button">取消</button>
                    </div>
                </div>

            </form>
        )
    }
}
export default AddProductForm;