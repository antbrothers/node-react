/*
 * @Author: jianxi_lin
 * @Dec: 创建sql语句
 * @Date: 2018-03-20 16:53:54 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-03-21 10:14:10
 */

 var connection = require("../config/connection.js")
 var orm = {
     /**
      * 查询表所有数据
      */
     selectAll: function(tableInput, cb) {
         var queryString = "SELECT * FROM " + tableInput + ";";
         connection.query(queryString, function(err, result) {
             if (err) {
                 throw err;
             } 
             cb(result);
         });
     },

     /**
      * 插入数据
      */
     insertOne: function(table, columns, values, cb) {
         var queryString = " INSERT INTO " + table;
         queryString +=" ( ";
         queryString += columns.toString();
         queryString += " ) ";
         queryString += " VALUES (?,?) ";
         console.log(queryString);
         connection.query(queryString, values, function(err, result) {
             if (err) {
                 throw err;
             }
             cb(result);
         });
     },

     /**
      * 更新数据
      */
     updateOne: function(table, updateObject, condition, cb) {
         var queryString = " UPDATE " + table;
         var key = Object.keys(updateObject)[0];
         var value = Object.values(updateObject)[0];

         queryString +=" SET ";
         queryString += key + "=" + value;
         queryString += " WHERE ";
         queryString += condition;
      
         connection.query(queryString, function(err, result) {
             if (err) {
                 throw err;
             } 
             cb(result);
         });
     },
     /**
      * 删除数据
      */
     deleteOne: function(table, condition, cb) {
         var queryString = " DELETE from " + table + " WHERE " + condition;
         connection.query(queryString, function(err, result) {
             if (err) {
                 throw err;
             }
             cb(result);            
         })

     }          
 };
 module.exports = orm;

 

