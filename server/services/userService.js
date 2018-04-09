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
    findAll() {
        return User.findAll()
    },
   
    /**
     * 根据mobile 查找用户信息
     * 
     * @param {any} mobile 
     */
    findOneByMobile(mobile) {
        return User.findOne({
            where: {
                mobile: mobile
            }
        })
    },
    /**
     * 查找手机号不等于 XXX 的用户信息
     * 
     * @param {any} conditioin 
     * @returns 
     */
    find(mobile) {
        return User.findAll({
            where: {
                // mobile: {
                //     $ne: mobile
                // }
                 mobile: mobile                
            }
        })
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