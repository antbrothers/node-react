var models = require('../models');
const User = models.User;

/**
 * user 用户表查询
 * @param {*} param0 
 */
var userObj = {
    findAll: (limit = 50, offset = 0) => {
        return User.findAll({
            limit: Number(limit),
            offset: Number(offset)        
        })
    }
}
module.exports = userObj;