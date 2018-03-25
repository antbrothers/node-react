var models = require('../models');
const User = models.User;

/**
 * user 用户表
 * @param {*} param0 
 */
var userObj = {
    /**
     * 查询所有
     */
    findAll(limit = 50, offset = 0) {
        return User.findAll()
    },
    /**
     * 创建表单
     * @param {*} data 
     */
    create(data) {
        return User.create(data)
    },
    /**
     * 删除用户
     */
    delete(id) {
        return User.delete({})
    }

}
module.exports = userObj;