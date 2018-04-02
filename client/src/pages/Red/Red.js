/*
 * @Author: jianxi_lin 
 * @Date: 2018-03-30 10:31:01 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-04-02 16:51:09
 */
import React, { Component } from 'react'
import { NavBar, Icon, List, TextareaItem, Button } from 'antd-mobile'

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

        <Button className="btn">提交</Button>
      </div>
    )
  }
}
export default Red