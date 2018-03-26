import React, { Component } from 'react';
import { List, InputItem } from 'antd-mobile';


require('./Login.css')
var headImg = require('../../assest/images/tx.jpg')
class Login extends Component {
    render() {
        return (
            <div id="login-main">
                <div className="login-head">
                    <div className="head-comm">进入</div>
                    <div className="head-img">
                        <img src={headImg} className="head-use-img" />
                    </div>
                </div>
                <div className="inp-comm">
                    <InputItem value="" placeholder = "请输入已验证的手机号或邮箱"></InputItem>
                    <InputItem value="" placeholder = "请输入密码"></InputItem>
                </div>
            </div>
        )
    }
}
export default Login