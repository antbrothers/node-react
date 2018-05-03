/*
 * @Author: jianxi_lin 
 * @Desc: 接入第三方api
 * @Date: 2018-04-03 14:49:38 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-05-03 12:48:20
 */


var http = require('http');

module.exports = async (ctx) => {
    let options = {
        port: 80,
        hostname: 'data.mboss.mwee.cn',
        method: 'GET',
        path: '/rest/webApi'
    };
    return new Promise((resolve, reject) => {
        let request = http.request(options, (socket) => {
            let data = '';
            console.log('status: ', socket.statusCode, socket.headers);
            socket.on('data', (chunk) => {
                data += chunk;
            });
            socket.on('end', () => {
                // console.log('server call back get data: ' , data);
                return resolve(data);
            });
            socket.on('error', (e) => {
                return reject(data);
            });
        })
        request.end();
    })
} 