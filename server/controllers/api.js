const APIError = require('../middleware/rest').APIError;
var userService = require('../services/userService');

module.exports = {
    'GET /api/products': async (req, res, next) => {
        res.rest({
            products: userService.findAll()
        });
    },
    'POST /api/insertUser':  async (req, res, next) => {
        res.rest({
            products: userService.create(req.body)
        })
    },
    'DELETE /api/deleteUser/:id' async (req, res, next) => {
        res.rest({
            products: userService.delete(req.pamams.id)
        })
    }
};