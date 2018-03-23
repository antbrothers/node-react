/*
 * @Author: jianxi_lin 
 * @Dec 向路由中注册控制器
 * @Date: 2018-03-23 15:07:19 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-03-23 15:54:45
 */

 const fs = require('fs');
 var path = require('path');
 const basename = path.basename(module.filename);
 function addMapping(router, mapping) {     
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else if (url.startsWith('PUT ')) {
            var path = url.substring(4);
            router.put(path, mapping[url]);
            console.log(`register URL mapping: PUT ${path}`);
        } else if (url.startsWith('DELETE ')) {
            var path = url.substring(7);
            router.del(path, mapping[url]);
            console.log(`register URL mapping: DELETE ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }  
 }

 function addController(router, dir) {
    fs.readdirSync(__dirname + '/' + dir).filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    }).forEach((file) => {
        addMapping(router, require(path.join(__dirname,dir, file)));
    })
 }
 module.exports = function(dir) {
     let controllers_dir = dir || 'controllers',
     router = require('express').Router();
     addController(router,controllers_dir);
     return router;
 }
