import React, { Component } from 'react'
import { NavBar, Icon, List, TextareaItem, Button } from 'antd-mobile'
require('./List.css')

class RedList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {
                        console.log('onleftClick');
                    }}
                >NavBar</NavBar>
                <div className="table-main">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>头像</th>
                                <th>姓名</th>   
                                <th>大小</th>
                                <th>价格</th>                            
                            </tr>
                            <tr>
                                <td></td>
                                <td>蚂蚁兄弟</td>
                                <td>小</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>蚂蚁兄弟</td>
                                <td>小</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>蚂蚁兄弟</td>
                                <td>小</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>蚂蚁兄弟</td>
                                <td>小</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>蚂蚁兄弟</td>
                                <td>小</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>蚂蚁兄弟</td>
                                <td>小</td>
                                <td>45</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
module.exports = RedList