import React, { Component } from 'react';
import { List, InputItem, WingBlank, Button, WhiteSpace, Modal, Toast} from 'antd-mobile';
import { login } from '../../redux/actions/login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

require('./Login.css')
var headImg = require('../../assest/images/tx.jpg')
class Login extends Component {
    state = {
        userName: '',
        passWord: ''
    }
    handleChange = (name, value) => {
        var newState = {};
        newState[name] = value;
        this.setState(newState)
        this.props.loginResult.code = 0
    }
    goUserPage = () => {
        return <Redirect push to="/red" />
    }

    // 弹出提示
    showAlert = (errMessage) => {
        Modal.alert('提示', errMessage, [
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            { text: '确定', onPress: () => console.log('确定') }
        ])
    }
    componentDidUpdate() {
        if (this.props.loginResult.code == 100) {
            this.showAlert(this.props.loginResult.message)
        } else if (this.props.loginResult.code == 200) {
            this.goUserPage()
        } else {
            console.log('登录失败');
        }
    }
    render() {
        const code = this.props.loginResult.code;
        return (
            <div>
                {
                    code == 200 ? this.goUserPage() :
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
                        </div>
                }
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        loginResult: state.login
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