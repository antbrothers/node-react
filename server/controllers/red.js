

var redService = require('../services/redService')
var userService = require('../services/userService')
module.exports = {
    'POST /api/getRed': async (req, res, next) => {   
        var user  = await userService.findOneByMobile(req.body.mobile).then(rest => { return rest }).catch(err=> {return err})        
        if (typeof user.dataValues == 'object') {
            var  result = await redService(
                {
                    // url: 'https://activity.waimai.meituan.com/coupon/sharechannelredirect/B2EA8E1ABA8B47EA82DB475BA17B517D?urlKey=477F96D5BB4C42D38E9CCDD4DA3B2AE0&state=123&uiId=0&code=003MxfCd1vo7Fr0pPJzd1cMmCd1MxfCW',
                    // url: 'https://activity.waimai.meituan.com/coupon/sharechannelredirect/B2EA8E1ABA8B47EA82DB475BA17B517D?urlKey=F10DC93CF0374537AE6786F2A660AB10&state=123&uiId=0&code=0039lvvt0Tavke1D5rtt0cbGvt09lvvP',
                    // url: 'https://activity.waimai.meituan.com/coupon/sharechannel/B2EA8E1ABA8B47EA82DB475BA17B517D?urlKey=2B6F60B4043F496EBE3B8EC647DF2E7D&utm_source=appshare&utm_fromapp=wx',
                    url: req.body.url,
                    mobile: user.dataValues.mobile,
                    cookie: 'ewxinfo=' + user.dataValues.wxCookie
                }            
            )      
            if (result.code == 4002 || result.code == 4201) {
                res.rest({
                    products: {code: result.code, message: result.msg, data: result.data.wxCoupons}
                })
            }
        } else {
            res.rest({
                products: {code: 1000, message: '查找不到当前手机号的信息', data: []}
            })
        }
        
    }       
}