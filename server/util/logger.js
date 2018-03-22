/*
 * @Author: jianxi_lin 
 * 日志模块
 * @Date: 2018-03-22 13:50:55 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-03-22 18:00:33
 */
var winston = require('winston');
var expressWinston = require('express-winston');
require('winston-daily-rotate-file');
let moment = require('moment');
var path = require('path');


// 日志打印位置
const LOGS_DIR = path.join(__dirname, '../logs');
// 公共配置选项
const LOGGER_COMMON_CONFIG = {
    meta: true,
    msg: "HTTP {{req.method}} {{req.url}}",
    expressFormat: true,
    colorize: true,
    ignoreRoute: function (req, res) { return false; }
};
var transport = new (winston.transports.DailyRotateFile)({
    filename: LOGS_DIR +'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  });

  transport.on('rotate', function(oldFilename, newFilename) {
    // do something fun
  });
var Logger = {
    /**
     * 在路由之前记录
     * @param {*} app 
     */
    initRequestLogger(app) {
        app.use(expressWinston.errorLogger({
            transports: [
                // 控制台
                new winston.transports.Console({
                    json: true,
                    colorize: true
                }),
                // 文件
                new winston.transports.File({
                    level: 'info',                
                    json: true,
                    filename: LOGS_DIR + '/access.log.txt'                   
                }) 
                // transport              
            ],
           LOGGER_COMMON_CONFIG
        }))
    },
    /**
     * 在路由之后由意义
     * 错误日志记录
     * @param {} app 
     */
    initErrorLogger(app) {
        app.use(expressWinston.errorLogger({
            transports: [
                new winston.transports.Console({
                    json: true,
                    colorize: true
                }),
                // 文件
                new winston.transports.File({
                    level: 'error',
                    filename: LOGS_DIR + '/error.log.txt'                    
                })
            ],
            LOGGER_COMMON_CONFIG
        }))
    }
}
module.exports = Logger;