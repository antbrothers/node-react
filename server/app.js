/*
 * @Author: jianxi_lin  
 * @Date: 2018-03-21 09:22:02 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-03-23 17:40:20
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var winston = require('./util/logger');
var rest = require('./middleware/rest')
var controller = require('./controller')
// var index = require('./routes/index');
// var user = require('./routes/user')

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express)
app.set('view engine', 'html');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 初始化日志模块
winston.initRequestLogger(app);

// app.use('/', index);
// app.use('/use', user)
app.use(rest.restify())
app.use(controller())





// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  // res.render('error');
  res.status(err.status).json({code: err.status, message: res.locals.message})
});

module.exports = app;
