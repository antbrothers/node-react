import React, { Component } from 'react';
import { List, InputItem, WingBlank, Button, WhiteSpace } from 'antd-mobile';
import { login } from '../../redux/actions/login';
import { connect } from 'react-redux';

require('./Login.css')
var headImg = require('../../assest/images/tx.jpg')
class Login extends Component {
    state = {
        userName: '',
        passWord: ''
    }
    handleChange = (name, value) => {
        var newState = {};
        newState[name] =  value;
        this.setState(newState)            
    }
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
                    <InputItem clear value={this.state.userName} placeholder="请输入已验证的手机号或邮箱" onChange={this.handleChange.bind(this, 'userName')}></InputItem>
                    <InputItem clear value={this.state.passWord} placeholder="请输入密码" onChange={this.handleChange.bind(this, 'passWord')}></InputItem>
                    <WingBlank className="btn-enter">
                        <Button className="btn" onClick={() => this.props.login(this.state)}>进入</Button><WhiteSpace />
                    </WingBlank>
                </div>
                {
                    this.props.loginResult
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loginResult: state.login.message
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => {
            dispatch(login(user))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)