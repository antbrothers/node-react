var express = require("express");
var useService = require('../services/userService');
const router = express.Router();

router.get("/", function (req, res) {
    useService.findAll().then((result) => {
        console.log(result)
        res.json(result);
    })
});
router.post('/api/postTest/', function (req, res) {
    useService.create(req.body).then((result) => {
        res.send({ id: result.dataValues.id })
    }).catch(err=>{
        console.log(err)
    })
})
module.exports = router;