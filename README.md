# react-cli
```
后端： node express winston winston-daily-rotate-file sequlize mysql
前端： rect redux react-router webpack 4.0
```
##### 项目结构

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

##### 自动扫描controller文件,并且导出router, 在app.js 一次使用
```
#controller.js
...function addController(router, dir) {
    fs.readdirSync(__dirname + '/' + dir).filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    }).forEach((file) => {
        addMapping(router, require(path.join(__dirname,dir, file)));
    })
 }...
 
 #app.js
 app.use(controller())

```
##### 使用sequlize 实现关系对象映射
```
# models/index.js
try {
    sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, dbConfig);
    console.log("connection to the db....")
} catch (e) {
    console.log(e);
    throw e;
}
fs.readdirSync(__dirname).filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
})
Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
})
db.sequelize = sequelize;
db.Sequelize = Sequelize;
```

##### 使用http-proxy-middleware，处理第三api方向代理
```
# config/proxy.js
 module.exports = {
     proxyTable: {
         '/external': {
             target: 'https://activity.waimai.meituan.com/coupon/grabShareCoupon',
             changeOrigin: true,
             pathRewrite: {
                 '^/external': '/'
             }
         },
         '/extget': {
             target: 'http://www.123369.com.cn/api/Jkb/GetHomeJKBList',
             changeOrigin: true,
             pathRewrite: {
                 '^/extget': '/'
             }
         }
     }
 }
# app.js
var proxyTable = config.proxyTable;
Object.keys(proxyTable).forEach(function(context) { 
  var options = proxyTable[context];
  var Proxy = proxy(options);
  app.use(context, Proxy)
})
```

