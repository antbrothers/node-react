var loginService = require('../services/loginService');
const TIP = require('../config/error.message')
module.exports = {
  'GET /api/login/:userName/:passWord': async (req, res, next) => {
    let user = await loginService.login(req.params.userName)
    if (req.params.passWord === user.dataValues.passWord) {
      res.rest({
        products: {
          code: 200,
          message: TIP.LOGIN_SUCCESS,
          data: []
        }
      })
    } else {
      res.rest({
        products: {
          code: 100,
          message: '密码不正确',
          data: []
        }
      })
    }
  },
  'POST /api/registerUse': async (req, res, next) => {
    res.rest({
      products: loginService.register(req.body)
    })
  }
}