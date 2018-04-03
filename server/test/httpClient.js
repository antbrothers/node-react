

var http = require('http');

module.exports = async (ctx) => {
    let options = {
        port: 80,
        hostname: 'www.123369.com.cn',
        method: 'GET',
        path:'/api/ServiceList'
    };
    // let getData = function () {
    //     return new Promise((resolve, reject) => {
    //         let request = http.request(options, (socket) => {
    //             let data ='';
    //             console.log('status: ' , socket.statusCode , socket.headers);
    //             socket.on('data' , (chunk)=>{
    //                 data += chunk;
    //               });
    //               socket.on('end' , ()=>{
    //                 console.log('server call back get data: ' , data);
    //                 return resolve(data);
    //               });
    //               socket.on('error' , (e)=>{
    //                 return reject(data);
    //               });          
    //         })
    //         request.end();
    //     })
    // }
    // ctx.body = await getData()
    return new Promise((resolve, reject) => {
        let request = http.request(options, (socket) => {
            let data ='';
            console.log('status: ' , socket.statusCode , socket.headers);
            socket.on('data' , (chunk)=>{
                data += chunk;
              });
              socket.on('end' , ()=>{
                // console.log('server call back get data: ' , data);
                return resolve(data);
              });
              socket.on('error' , (e)=>{
                return reject(data);
              });          
        })
        request.end();
    })
} 