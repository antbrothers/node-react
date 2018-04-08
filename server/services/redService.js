const axios = require('axios')
const querystring = require('querystring')
const rohr = require('../util/rohr')
const crypto = require('../util/crypto')


const origin = 'https://activity.waimai.meituan.com'

var initAxios = function (url) {
    this.params = {
        //urlKey: '477F96D5BB4C42D38E9CCDD4DA3B2AE0',
        // code: '003MxfCd1vo7Fr0pPJzd1cMmCd1MxfCW',
        urlKey: '2B6F60B4043F496EBE3B8EC647DF2E7D',
        code: '0039lvvt0Tavke1D5rtt0cbGvt09lvvP',
        state: 123,
        uiId: 0,
        channelUrlKey: url.match(/\/(?:sharechannelredirect|sharechannel)\/(.*?)\?/).pop(),
    }
}
initAxios.prototype = {
    request: function () {
        return axios.create({
            baseURL: origin,
            headers: {
                origin,
                referer: origin,
                'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T MicroMessenger) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36'
            },
            transformRequest: [data => querystring.stringify(data)]
        })
    },

    /**
     * 基础包装post请求
     */
    post: async function (url, _params) {
        this.params._token = rohr.reload(url + '?' + querystring.stringify(_params))
        const { data } = await this.request().post(url, this.params)
        data.data = crypto(data.data)
        if (typeof data.data === 'string') {
            data.data = JSON.parse(data.data)
        }
        return data
    },
    /**
     * 根据初始参数,获取红包信息
     * @param _token 页面token
     * @param channelUrlKey
     * @param code
     * @param state
     * @param uiId
     * @param urlKey
     * 
     * @returns { code，dparam, share_title .... }
     */
    getReturnData: async function () {
        const data = await this.post('/async/coupon/sharechannelredirect', this.params)
        return data
    },
    /**
     * 获取最大
     */
    lucky: async function () {
        const data = await this.getReturnData()
        const number = data.data.share_title.match(/第(\d+)个/).pop()
        return number
    },

    /**
     * 领取红包的逻辑
     */
    lottery: async function (opt) {
        var _this = this
        const data = await this.getReturnData()
        if (!opt.cookie) {
            console.log('没这么多微信号 或 红包链接不正确')
            throw new Error('红包链接不正确\n或\n请求美团服务器失败')
        }
        _this.params.userPhone = opt.mobile
        _this.params.dparam = data.data.dparam
        _this.params.originUrl = opt.url
        _this.params.baseChannelUrlKey = ''
        _this.params.uuid = ''
        _this.params.platform = 11
        _this.params.partner = 162
        _this.params.riskLevel = 71
       var res = await _this.post('/coupon/grabShareCoupon', _this.params,
            {
                headers: {
                    cookie: opt.cookie
                }
            })
         console.log(res)
        // const length = res.data.wxCoupons.length
        // const number = data.data.share_title.match(/第(\d+)个/).pop()      
     return res
    }
}

module.exports = async params => {
    try {
        const init = new initAxios(params.url)
        const res = await init.lottery(params)
        // console.log(res)
        // return { message: `手气最佳红包已被领取\n\n手气最佳：${res.nick_name}\n红包金额：${res.coupon_price / 100} 元\n领取时间：${res.dateStr}` }
        return res
    } catch (e) {
        console.error(e)
        return { message: e.message }
    }
}