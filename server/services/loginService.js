var models = require('../models');
const User = models.User;

module.exports = {
    /**
     * 用户登录
     */
    login(userName) {
        return User.findOne({
            where: {
                userName: userName
            }
        })
    },
  /**
   * 用户注册
   */
  register(data) {
      return User.create(data)
  }
}