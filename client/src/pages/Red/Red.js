/*
 * @Author: jianxi_lin 
 * @Date: 2018-03-30 10:31:01 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-04-11 17:47:42
 */
import React, { Component } from 'react'
import { NoticeBar, WhiteSpace, Icon, NavBar, Tabs, Badge, InputItem, TextareaItem, Button, Toast, WingBlank } from 'antd-mobile'
import { red } from '../../redux/actions/red'
import { createWxInfo } from '../../redux/actions/createWxInfo'
import { connect } from 'react-redux'
require('./Red.css')
class Red extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mobile: '14782543977',
      tellphone: '',
      cookie: '',
      ewxshinfo: '',
      url: 'https://activity.waimai.meituan.com/coupon/sharechannel/B2EA8E1ABA8B47EA82DB475BA17B517D?urlKey=FE76EE67487443CE8369ACDDDCD440B1'
      // url: 'https://activity.waimai.meituan.com/coupon/sharechannel/B2EA8E1ABA8B47EA82DB475BA17B517D?urlKey=C3AC870A3C9149D7B4B32283E8638144'
    }
  }
  handChange(name, value) {
    this.props.getRedState.code = 0
    this.props.getCreateWx.code =0
    var newState = {}    
    newState[name] = value
    this.setState(newState)
  }


  componentDidUpdate() {  
    if ([7001, 4002, 4201, 1000, 7002, 4000].includes(this.props.getRedState.code)) {
      Toast.info(this.props.getRedState.message, 2, null, false);
    }
    if ([200].includes(this.props.getCreateWx.code)) {
      Toast.info('贡献成功,谢谢', 2, null, false)
    }
  }
  cows() {
    var html = ''
    if (JSON.stringify(this.props.getRedState.data) == '{}') {
      html += `<tr></tr>`
    } else {
      this.props.getRedState.data.map(function (item, index) {
        html += `<tr key=${index}><td ><img class="img-tx" src='${item.head_img_url}'/><span>${item.nick_name}</span></td><td>${(item.coupon_price/100).toFixed(2)}</td><td>${item.bestLuck == true? '<span class="yes">✔</span>' :'✘'}</td></tr> `
      })
    }
    return html
  }
  render() {
    const tabs = [
      {
        title: <Badge>规则</Badge>
      },
      {
        title: <Badge>领取</Badge>
      },
      {
        title: <Badge dot>贡献</Badge>
      }

    ]
    var createMarkup = function () {
      return { __html: this.cows() }
    }.bind(this);
    return (
      <div id="red-main">
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            console.log('onleftClick');
          }}
        >领取大红包</NavBar>

        <WhiteSpace size="lg" />
        <div className="tip-one tip-comm">
          每天5次领取红包机会         
          </div>
        <WhiteSpace size="lg"></WhiteSpace>
        <div className="tip-two tip-comm">
            请大家贡献自己的美团cookie,这个和自己账号的安全和个人隐私无关，只是一个美团加密过的字符串。        
          </div>
        <WhiteSpace size="lg"></WhiteSpace>
        <Tabs tabs={tabs}
          initialPage={1}
          swipeable = {false}
          onChange={(tab, index) => {}}
          onTabClick={(tab, index) => { }}
        >
          <div className="tab-content">
            <ul>
              <li>1.提交 “最大红包已被领取” 的链接，也可能产生不必要的次数消耗，所以领取前，请确认最大红包还未被人领。</li>
              <WhiteSpace size="lg"></WhiteSpace>                                      
              <li>2. 美团限制每个手机号一天只能领 5 个红包，请确保你填写的手机号还可以领，否则会浪费你的次数。</li>
              <WhiteSpace size="lg"></WhiteSpace>
              <li>3. 特别注意，无法领取差一个就是大红包的情况。例如：第七个是最大红包，已经有六个人领了，此时不要使用我们的领取功能。</li>
            </ul>
          </div>
          <div className="tab-content">
            <WhiteSpace size="lg"></WhiteSpace>
            <InputItem placeholder="请输入手机号码" value={this.state.mobile} clear className="mobile" onChange={this.handChange.bind(this, 'mobile')}></InputItem>
            <WhiteSpace size="lg"></WhiteSpace>
            <TextareaItem placeholder="请贴入地址" value={this.state.url} onChange={this.handChange.bind(this, 'url')} className="linkAddr" rows={5}></TextareaItem>
            <WhiteSpace size="lg"></WhiteSpace>
            <Button className="btn" onClick={() => this.props.getRed(this.state)}>领取</Button>
            <WhiteSpace size="lg"></WhiteSpace>
            <table className="table">
              <thead>
                <tr>
                  <th>昵称</th>
                  <th>金额</th>
                  <th>大红包</th>
                </tr>
              </thead>
              <tbody dangerouslySetInnerHTML={createMarkup()}>
              </tbody>

            </table>
          </div>
          <div className="tab-content">
            <WhiteSpace size="lg"></WhiteSpace>
            <InputItem placeholder="请输入手机号码" value={this.state.tellphone} clear className="mobile" onChange={this.handChange.bind(this, 'tellphone')}></InputItem>
            <WhiteSpace size="lg"></WhiteSpace>
            <TextareaItem placeholder="请贴入微信cookie: ewxinfo的值" value={this.state.cookie} onChange={this.handChange.bind(this, 'cookie')} className="linkAddr" rows={3}></TextareaItem>
            <WhiteSpace size="lg"></WhiteSpace>
            <TextareaItem placeholder="请贴入微信cookie: ewxshinfo的值" value={this.state.ewxshinfo} onChange={this.handChange.bind(this, 'ewxshinfo')} className="linkAddr" rows={3}></TextareaItem>
            <WhiteSpace size="lg"></WhiteSpace>
            <Button className="btn" onClick={() => this.props.createWx(this.state.tellphone, this.state.cookie, this.state.ewxshinfo)}>贡献</Button>
            <WhiteSpace size="lg"></WhiteSpace>
      </div>
        </Tabs>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    getRedState: state.red,
    getCreateWx: state.wxInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRed: (userInfo) => {
      dispatch(red(userInfo))
    },
    createWx: (tellphone, cookie, ewxshinfo) => {
      dispatch(createWxInfo(tellphone, cookie, ewxshinfo))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Red)