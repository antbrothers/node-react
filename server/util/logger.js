/*
 * @Author: jianxi_lin 
 * @Date: 2018-03-23 08:56:37 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-03-23 14:22:32
 */
let morgan = require('morgan');
let winston = require('winston');
let stackTace = require('stack-trace'); // 很容易捕获到当前的堆栈
let path = require('path');
let moment = require('moment');
require('winston-daily-rotate-file');
var fs = require('fs');

// 日志打印位置
const LOGS_DIR = path.join(__dirname, '../logs');
fs.existsSync(LOGS_DIR) || fs.mkdirSync(LOGS_DIR)

// 公共配置选项，每天生成一个日志文件，一个文件最大 10M
const LOGGER_COMMON_CONFIG = {
    timestamp: moment().format('YYYY-MM-DD HH:mm:ss:SSS'),
    prepend: true,
    datePattern:'yyyy-MM-dd.',
    maxsize: 1024 * 1024 * 10,
    colorize: false,
    json: false,
    handleExceptions: true,
};
/**
 * info 普通日志记录
 * error 错误严重时记录
 * warn 普通错误记录
 * debug 输出到控制台，不记录到文件中
 */
let logger = new winston.Logger({
    transports: [
        new (winston.transports.DailyRotateFile) ({
            name: 'error',
            level: 'error',
            filename: LOGS_DIR + '/error.log.txt',
            LOGGER_COMMON_CONFIG,
        }),
        new (winston.transports.DailyRotateFile) ({
            name: 'warn',
            level: 'warn',
            filename: LOGS_DIR + '/warn.log.txt',
            LOGGER_COMMON_CONFIG,
        }),
        new (winston.transports.DailyRotateFile) ({
            name: 'normal',
            level: 'info',
            filename: LOGS_DIR + '/normal.log.txt',
            LOGGER_COMMON_CONFIG,
        }),
        new winston.transports.Console({
            name: 'debug',
            level: 'debug',
            colorize: true,
            json: false,
            handleExceptions: true,
        }),
    ],
    exitOnError: false,
});
/**
 * 打印 Access Log 使用
 * 不输出到控制台中
 */
let accessLogger = new winston.Logger({
    transports: [
        new (winston.transports.DailyRotateFile) ({
            name: 'access',
            level: 'info',
            filename: LOGS_DIR + '/access.log.txt',
            LOGGER_COMMON_CONFIG,
        }),
    ],
    exitOnError: false,
});
// 提供 morgan 使用
logger.stream = {
    write: function(message) {
        accessLogger.info(message.trim()); // trim 去除多余换行
    }
};

 //morgan.format('joke', '[joke] :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"');
/**
 * 日志处理对象
 */
let Logger = {
    // 初始化 morgan 记录请求记录
    initRequestLogger: function(app) {
        app.use(
            morgan('combined', {
                'stream': logger.stream,
                // OPTIONS 类型请求不记录在日志中
                'skip': (req, res) => req.method === 'OPTIONS'
            })
        );
    },
    // 开发模式才开启
    debug: function() {
        if(process.env['NODE_ENV'] === 'development') {
            let cellSite = stackTrace.get()[1];
            logger.debug.apply(
                logger,
                [
                    arguments,
                    {
                        FilePath: cellSite.getFileName(),
                        LineNumber: cellSite.getLineNumber(),
                    }
                ]
            );
        }
    },
    info: function() {
        let cellSite = stackTrace.get()[1];
        logger.info.apply(
            logger,
            [
                arguments,
                {
                    FilePath: cellSite.getFileName(),
                    LineNumber: cellSite.getLineNumber(),
                }
            ]
        );
    },
    warn: function() {
        let cellSite = stackTrace.get()[1];
        logger.warn.apply(
            logger,
            [
                arguments,
                {
                    FilePath: cellSite.getFileName(),
                    LineNumber: cellSite.getLineNumber(),
                }
            ]
        );
    },
    // 错误日志并记录行号
    error: function() {
        let cellSite = stackTrace.get()[1];
        logger.error.apply(
            logger,
            [
                arguments,
                {
                    filePath: cellSite.getFileName(),
                    lineNumber: cellSite.getLineNumber(),
                }
            ]
        );
    },
};
module.exports = Logger;