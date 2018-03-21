/*
 * @Author: jianxi_lin
 * @Date: 2018-03-20 17:26:52 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-03-21 09:19:17
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
    });  
});

router.post("/api/burgers", function(req, res) {
    debugger;
    burger.create(["burger_name", "devoured"], [req.body.burger_name, false], function(result) {
        // 插入成功之后返回最新数据的id
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {   
    var condition = "id=" + req.params.id;
    burger.update(
        {
            devoured: false
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                // 更新的数据不存在
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});


module.exports = router;