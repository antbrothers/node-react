
const axios = require('axios')
const querystring = require('querystring')
const rohr = require('../util/rohr')
const crypto = require('../util/crypto')


const origin = 'https://activity.waimai.meituan.com'

var initAxios = function (url) {

    this.params = {
        //urlKey: '477F96D5BB4C42D38E9CCDD4DA3B2AE0',
        // code: '003MxfCd1vo7Fr0pPJzd1cMmCd1MxfCW',
        // urlKey: '2B6F60B4043F496EBE3B8EC647DF2E7D',
        urlKey: querystring.parse(url.split("?")[1]).urlKey,
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
                'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 MicroMessenger/6.5.2.501 NetType/WIFI WindowsWechat QBCore/3.43.691.400 QQBrowser/9.0.2524.400'
                //'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T MicroMessenger) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36'
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
                    cookie: opt.cookie,
                    origin,
                    referer: origin,
                    'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 MicroMessenger/6.5.2.501 NetType/WIFI WindowsWechat QBCore/3.43.691.400 QQBrowser/9.0.2524.400'
                    //'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T MicroMessenger) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36'
                }
            })
        const length = res.data.wxCoupons.length
        const number = data.data.share_title.match(/第(\d+)个/).pop()

        // 4201 需要验证码
        // 1006 该号码归属地暂不支持
        // 1 成功       
        // 4000 抢光了
        // 7002 微信 cookie 不正确或失效
        // 7006 今日领取次数达达到上限
        // 4002 你已经抢过这个红包了
        // 4001 已过期
        // 7001 次数用完

        if (res.code == 1 && parseInt(number) > length) {
            return {
                code: 100001, count: parseInt(number) - length, msg: '还有' + (parseInt(number) - length) + '到最大红包', data: { wxCoupons: res.data.wxCoupons }
            }
        }
        return res
    }
}

module.exports = async params => {
    try {
        const init = new initAxios(params.url)
        const res = await init.lottery(params)
        return res
    } catch (e) {
        console.error(e)
        return { message: e.message }
    }
}