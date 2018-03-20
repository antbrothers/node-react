/*
 * @Author: jianxi_lin
 * @Dec: 创建数据库链接
 * @Date: 2018-03-20 16:42:33 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-03-20 16:53:29
 */
var mysql = require('mysql')

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Admin~123456",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("err connection:" + err.stack);
        return;
    }
    console.log("connected as id:" + connection.threadId);
})
module.exports = connection;
