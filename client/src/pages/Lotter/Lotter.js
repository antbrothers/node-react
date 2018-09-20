import React, { Component } from 'react'
require('./Lotter.css')
class Lotter extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="lotter-contain">
       <div className="shanDeng">
       <div className="luck">
          <table>
            <tbody>
              <tr>
                <td className="luck-unit luck-unit-0">
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
                <td rowSpan="2" colSpan="2" className="cjBtn" id="btn" />
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
