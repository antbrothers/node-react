/*
 * @Author: jianxi_lin 
 * @Date: 2018-03-30 10:31:01 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-04-03 17:07:24
 */
import React, { Component } from 'react'
import { NavBar, Icon, List, TextareaItem, Button } from 'antd-mobile'
import { red } from '../../redux/actions/red'
import { connect } from 'react-redux'

require('./Red.css')

class Red extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  handChange(name, value) {
    var newState = {}
    newState[name] = value
    this.setState(newState)
  }
  render() {
    return (
      <div id="red-main">
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            console.log('onleftClick');
          }}
        >NavBar</NavBar>

        <List>
          <TextareaItem placeholder="请输入连接地址" className="link-adrr" value={this.state.value}
          onChange={this.handChange.bind(this, 'value')} rows={5} />
        </List>

        <Button className="btn" onClick={() => this.props.getRed()}>提交</Button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    getRedState: state.red
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRed: () => {
      dispatch(red())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Red)