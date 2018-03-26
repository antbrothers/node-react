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
        return User.destroy({
            where: {
                id: id
            }
        })
    },
    /**
     * 更新记录
     */
    update(data) {
        return User.update(
            {
                userName: 121,
                firstName: 'frfr'
            },
            {
                where: {
                    id: '4c61eab8-c694-48a2-8671-a35443d854d8'
                }
            })
    }

}
module.exports = userObj;