
let express = require('express');
let router = express.Router();
let fs = require('fs');



/**
 * 通过promise获取到静态数据
 */
let readFileData = () => {
    debugger
    let promise = new Promise((resolve, reject) => {
        fs.readFile("./public/database/database.json", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                reject("read filedata error")
            } else {                      
                resolve(data);
            }
        })
    })
    return promise;
}

/**
 * 通过promise 获取文件夹下的所有文件
 * @param {*} path 路径
 * @param {*} filleClass  文件夹名称
 */
let getFileName = (path, filleClass) => {
    let promise = new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject("read fileName err");
            } else {
                files = files.map((file) => {
                    return "http://localhost:3000/images/" + filleClass + "/" + file;
                });
                resolve(files)
            }
        })
    })
    return promise;
}

let imgNames = [];
let appNames = [];
let spikeNames = [];
let moreNames = [];
let likeNames = [];
let test = [];

readFileData().then((data) => {        
    test = data;
}, (err) => {
    console.log(err);
});
getFileName("./public/images/swiper", "swiper").then((files) => {
    imgNames = files
}, (err) => {
    console.log(err)
    imgNames = false;
});
exports.swiper = (req, res) => {
    const sendData = {
        status: 0,
        msg: "",
        data: "",
    }
    if (imgNames) {
        sendData.status = 1;
        sendData.msg = "success";
        sendData.data = imgNames;
    } else {
        sendData.msg = "error";
    }
    let json = JSON.stringify(sendData);
    res.send(json)
};
exports.test = (req, res) => {
    const sendData = {
        status: 0,
        msg: "",
        data: ""
    }
    if (test) {
        sendData.status = 1;
        sendData.msg= "success";
        sendData.data = test;
    } else {
        sendData.data = "error"
    }    
    res.send(test);
}