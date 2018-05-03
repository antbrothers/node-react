/**
 * Created by alan on 2018/5/3.
 */
var express = require("express");
var http = require("http");
var app = express();
var example = require('./httpClient')
app.get('/', function (req, res) {
    console.log("hello express");
    res.send("hello express");
});


app.get('/add', function (req, res) {    
    example().then(result => {
       res.send({data: result})
      }).catch(err => {
        console.log('err:' + err);        
      })
})

var server = app.listen(3003, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://" + host + port, host, port)
})