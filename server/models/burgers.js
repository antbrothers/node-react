/*
 * @Author: jianxi_lin
 * @Dec: burgers 模型
 * @Date: 2018-03-20 17:36:32 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-03-21 10:20:17
 */

 var orm = require("../config/orm.js")
 var burger = {
     /**
      * buerge 获取所有数据
      */
     all: function(cb) {
         orm.selectAll("burgers", function(res) {
             cb(res)
         });
     },
     /**
      * buerge 添加数据
      */
     create: function(cols, vals, cb) {
         orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
         });
     },

     /**
      *buerge  更新数据
      */
     update: function(objColVals, condition, cb) {
         orm.updateOne("burgers", objColVals, condition, function(res) {
             cb(res);
         });
     },
     
     /**
      * buerge 删除数据
      */
     delete: function(condition, cb) {
         orm.deleteOne("burgers", condition, function(res) {
             cb(res);
         });
     }
 };
 module.exports = burger;