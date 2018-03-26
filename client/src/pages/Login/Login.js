import React, { Component } from 'react';
import { List, InputItem,WingBlank,Button,WhiteSpace } from 'antd-mobile';


require('./Login.css')
var headImg = require('../../assest/images/tx.jpg')
class Login extends Component {
    render() {
        return (
            <div id="login-main">
                <div className="login-head">
                    <div className="head-comm">进入红包</div>
                    <div className="head-img">
                        <img src={headImg} className="head-use-img" />
                    </div>
                </div>
                <div className="inp-comm">
                    <InputItem clear placeholder = "请输入已验证的手机号或邮箱"></InputItem>
                    <InputItem clear placeholder = "请输入密码"></InputItem>
                    <WingBlank className="btn-enter">
                    <Button type="primary">进入红包</Button><WhiteSpace />
                    </WingBlank>
                </div>
            </div>
        )
    }
}
export default Login