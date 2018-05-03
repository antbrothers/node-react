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
        title: <Badge dot>cookie</Badge>
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
        每天有5次领取红包机会，领取前请先提交微信cookie    
          </div>
        <WhiteSpace size="lg"></WhiteSpace>
        <div className="tip-two tip-comm">
        cookie为美团加密的字符串，用来验证账户唯一性，与微信安全隐私等无关        
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
              <li>1.领取前，请勿打开红包链接，并确保最大红包未被领取</li>
              <WhiteSpace size="lg"></WhiteSpace>                                      
              <li>2.此应用无法领取下一个就是大红包的情况，例如：第7个手气最佳，已有6人领取</li>
              <WhiteSpace size="lg"></WhiteSpace>
              <li>3.请不要随意提交，以免造成不必要的次数浪费，影响他人使用。</li>
              <li>4.每个帐号每天最多被动领取4个小红包</li>
            </ul>
          </div>
          <div className="tab-content">
            <WhiteSpace size="lg"></WhiteSpace>
            <InputItem placeholder="请输入手机号码" value={this.state.mobile} clear className="mobile" onChange={this.handChange.bind(this, 'mobile')}></InputItem>
            <WhiteSpace size="lg"></WhiteSpace>
            <TextareaItem placeholder="请贴入红包链接" value={this.state.url} onChange={this.handChange.bind(this, 'url')} className="linkAddr" rows={5}></TextareaItem>
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
            <Button className="btn" onClick={() => this.props.createWx(this.state.tellphone, this.state.cookie, this.state.ewxshinfo)}>提交</Button>
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