var userService = require("../services/user.service");

const operations = {
    list: (req, res) => {
        return userService.findAll().then((data) => {
            res.status(200).json(data);
        })
    }
}

module.exports = operations;