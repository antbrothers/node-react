import React, { Component } from 'react';
import { Icon, Grid } from 'antd-mobile';
require('./loading.css')

export default class Loading extends Component {
    render() {       
          return (     
              <div id="component-load">
                 <Icon type="loading" size='lg' className="loading"></Icon>
              </div>                                          
          );
    }
}