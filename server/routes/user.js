var express = require("express");
var useService = require('../services/userService');
var logger = require('../util/logger')
const router = express.Router();

router.get("/", async function (req, res) {
    let result = await useService.findAll();
    // logger.error(result)
    res.json(result);  
});
router.post('/api/postTest/', async function (req, res) {
    let result = await useService.create(req.body)   
    res.send({ id: result.dataValues.id })  
})
module.exports = router;