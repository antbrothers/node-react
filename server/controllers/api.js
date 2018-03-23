const APIError = require('../middleware/rest').APIError;
var userService = require('../services/userService');

module.exports = {
    'GET /api/products': async (req, res, next) => {
        res.rest({
            products: userService.findAll()
        });
    },

    // 'POST /api/products': async (ctx, next) => {
    //     var p = products.createProduct(ctx.request.body.name, ctx.request.body.manufacturer, parseFloat(ctx.request.body.price));
    //     ctx.rest(p);
    // },

    // 'DELETE /api/products/:id': async (ctx, next) => {
    //     console.log(`delete product ${ctx.params.id}...`);
    //     var p = products.deleteProduct(ctx.params.id);
    //     if (p) {
    //         ctx.rest(p);
    //     } else {
    //         throw new APIError('product:not_found', 'product not found by id.');
    //     }
    // }
};