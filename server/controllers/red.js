
var redService = require('../services/redService')
var userService = require('../services/userService')
async function getBigRed(url, mobile, cookie) {
    return await redService({ url: url, mobile: mobile, cookie: cookie })
}
async function updateLevelNumber (mobile,level, number) {
    return await userService.updateLevelNumber(mobile,level, number).then(rest => {return rest}).catch(err => { return err })
 }
module.exports = {
    'POST /api/getRed': async (req, res, next) => {
        var user = await userService.findOneByMobile(req.body.mobile).then(rest => { return rest }).catch(err => { return err })
        var allUser = await userService.find(req.body.mobile).then(result2 => { return result2 }).catch(err => { return err })
        if (user) {
            for (var index = 0; index < allUser.length; index++) {
                var result = await getBigRed(req.body.url, allUser[index].dataValues.mobile, 'ewxinfo=' + '"' + allUser[index].dataValues.wxCookie + '"' + ';ewxshinfo=' + '"' + allUser[index].dataValues.ewxShinfo + '"')                                
                if (result.code == 100001 && result.count == 1) {
                    var ret = await getBigRed(req.body.url, user.dataValues.mobile, 'ewxinfo=' + '"' + user.dataValues.wxCookie + '"' + ';ewxshinfo=' + '"' + user.dataValues.ewxShinfo + '"')
                    if (ret.code == 1) {
                        await updateLevelNumber(user.dataValues.mobile, user.dataValues.level, user.dataValues.number)
                    }
                    res.rest({
                        products: { code: ret.code, message: ret.msg, data: ret.data.wxCoupons }
                    })
                } else if ([4201, 1006, 4000, 7002, 7006, 4001, 7001, 4002].includes(result.code)) {
                    res.rest({
                        products: { code: result.code, message: result.code == 7002 ? 'cookie过期' : result.msg, data: result.data.wxCoupons }
                    })
                    break;
                } else {
                    await updateLevelNumber(allUser[index].dataValues.mobile, allUser[index].dataValues.level, allUser[index].dataValues.number)
                }
            }
        } else {
            res.rest({
                products: { code: 1000, message: '查找不到当前手机号的信息', data: [] }
            })
        }
    },    
    'POST /api/createCookie': async (req, res, next) => {
        var user = await userService.findOneByMobile(req.body.tellphone).then(rest => { return rest }).catch(err => { return err })
        if (user) {
            res.rest({
                products: userService.update(req.body)
            })
        } else {            
            res.rest({
                products: userService.create({
                    mobile: req.body.tellphone,
                    wxCookie: req.body.wxCookie,
                    ewxShinfo: req.body.ewxShinfo
                })
            })
        }
    }
}