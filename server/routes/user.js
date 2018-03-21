var express = require("express");
var userCtrl = require('../controllers/user.ctrl');
const router = express.Router();

router.get("/", userCtrl.list);
module.exports = router;