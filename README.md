# react-cli
```
后端： node express winston winston-daily-rotate-file sequlize mysql
前端： rect redux react-router webpack 4.0
```
### 项目结构

```
 #server
 |--- bin
 |    |--- www                              // 项目启动文件
 |--- config
 |    |--- config.js                        // 数据库链接配置
 |    |--- error.message.js                 // 处理公共错误提示
 |    |--- proxy.js                         // 配置api反向代理
 |--- controllers                           // 控制器编写api
 |    |--- api.js                            
 |    |--- login.js
 |    |--- red.js
 |--- logs                                  // 日志文件
 |    |--- accesss.log.txt.2018-04-12       // 记入每一个接口请求
 |    |--- error.log.txt.2018-04-12         // 严重错误日志
 |    |--- normal.log.txt.2018-04-12        // 普通日志
 |    |--- warn.log.txt.2018-04-12          // 普通错误日志
 |--- middleware                            // 中间件
 |    |--- rest.js                          // 统一处理结果
 |--- models                                // 模型文件
 |    |--- index.js
 |    |--- red.js
 |    |--- user.js
 |--- public                                // 公共资源文件
 |    |--- images
 |    |--- javascript
 |    |--- stylesheets  
 |--- services                              // 业务逻辑处理
 |    |--- loginService.js
 |    |--- redService.js
 |    |--- userService.js
 |--- test                                  // 单元测试
 |    |--- test.js
 |--- util                                  // 工具
 |    |--- cookies.js
 |    |--- crypto.js
 |    |--- logger.js
 |    |--- rohr.js      
 |--- views                                 // 视图
 |    |--- index.html
 |--- app.js                                // 入口文件
 |--- controller.js                         // 自动导入控制器文件
 |--- package.json
```

