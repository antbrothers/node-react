import React, { Component } from 'react'
require('./Lotter.css')
class Lotter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idnex: -1, // 当前转到哪个位置
      count: 0 , // 总共有多少个位置
      timer: 0, // setTimede ID 
      speed: 20, // 初始转动速度
      times: 0, // 转到次数
      cycle: 50, // 转动基本次数至少要转多少次再进入到抽奖环节
      prize: -1 // 中奖位置
    }
  }
  // 初始化转盘
  init () {    
  }
  // 转动
  roll () {
    
  }
  lotterClick () {
    console.log(121)
  }
  render() {
    return (
      <div className="lotter-contain">
       <div className="shanDeng">
       <div className="luck">
          <table className="table-main">
            <tbody>
              <tr>
                <td className="luck-unit luck-unit-0 active">
                  <img src="http://www.jsdaima.com/Upload/1482283667/1.png" />
                </td>
                <td className="luck-unit luck-unit-1">
                  <img src="http://www.jsdaima.com/Upload/1482283667/2.png" />
                </td>
                <td className="luck-unit luck-unit-2">
                  <img src="http://www.jsdaima.com/Upload/1482283667/4.png" />
                </td>
                <td className="luck-unit luck-unit-3">
                  <img src="http://www.jsdaima.com/Upload/1482283667/3.png" />
                </td>
              </tr>
              <tr>
                <td className="luck-unit luck-unit-11">
                  <img src="http://www.jsdaima.com/Upload/1482283667/6.png" />
                </td>
                <td rowSpan="2" colSpan="2" className="cjBtn" id="btn" onClick={() => this.lotterClick()} />
                <td className="luck-unit luck-unit-4">
                  <img src="http://www.jsdaima.com/Upload/1482283667/5.png" />
                </td>
              </tr>
              <tr>
                <td className="luck-unit luck-unit-10">
                  <img src="http://www.jsdaima.com/Upload/1482283667/1.png" />
                </td>
                <td className="luck-unit luck-unit-5">
                  <img src="http://www.jsdaima.com/Upload/1482283667/6.png" />
                </td>
              </tr>
              <tr>
                <td className="luck-unit luck-unit-9">
                  <img src="http://www.jsdaima.com/Upload/1482283667/3.png" />
                </td>
                <td className="luck-unit luck-unit-8">
                  <img src="http://www.jsdaima.com/Upload/1482283667/4.png" />
                </td>
                <td className="luck-unit luck-unit-7">
                  <img src="http://www.jsdaima.com/Upload/1482283667/8.png" />
                </td>
                <td className="luck-unit luck-unit-6">
                  <img src="http://www.jsdaima.com/Upload/1482283667/7.png" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
       </div>        
      </div>
    )
  }
}
module.exports = Lotter
