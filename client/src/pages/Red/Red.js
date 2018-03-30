/*
 * @Author: jianxi_lin 
 * @Date: 2018-03-30 10:31:01 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-03-30 17:47:40
 */
import React, { Component } from 'react'
import { NavBar, Icon, List, TextareaItem } from 'antd-mobile'

require('./Red.css')

class Red extends Component {

  render() {   
    return (
      <div id="red-main">
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() =>{console.log('onleftClick');
          }}        
        >NavBar</NavBar>

        <List>
          <TextareaItem                       
            autoHeight
            labelNumber={5}
          />          
        </List>
      </div>
    )
  }
}
export default Red