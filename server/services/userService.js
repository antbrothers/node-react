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
     * 更新 cookie  记录
     */
    update(data) {
        return User.update(
            {
                wxCookie: data.wxCookie,
                ewxShinfo: data.ewxShinfo
            },
            {
                where: {
                    mobile: data.tellphone
                }
            })
    },
/**
 * 更新 领取次数
 * @param {手机号码} mobile 
 * @param {当天领取次数} level 
 * @param {总共领取次数} number 
 */
    updateLevelNumber(mobile,level, number) {
        return User.update(
            {
                level: level,
                number: number
            },
            {
                where: {
                    mobile: mobile
                }
            }
        )
    }
}
module.exports = userObj;