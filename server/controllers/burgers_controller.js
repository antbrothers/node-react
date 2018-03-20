/*
 * @Author: jianxi_lin
 * @Date: 2018-03-20 17:26:52 
 * @Last Modified by: yunkus.com
 * @Last Modified time: 2018-03-20 18:17:40
 */
var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.send(hbsObject);
    })
})

module.exports = router;