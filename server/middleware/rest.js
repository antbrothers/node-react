/*
 * @Author: jianxi_lin 
 * @Date: 2018-03-23 14:55:34 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-03-23 17:46:33
 */
module.exports = {
    APIError: function(code, message) {
        this.code = code || 'internal: unknown_error';
        this.message = message || '';
    },
    restify: (pathPrefix) => {
        pathPrefix = pathPrefix || '/api/';
        return async (req,res, next) => {           
            if (req.url.substring(0, 5) === '/api/') {               
                res.rest = (data) => {
                    res.set({
                        'Content-Type': 'application/json;charset=utf-8',                      
                    })
                     data.products.then(result => {
                        res.status(200).json({code: 200, message: '请求成功', count: 10, data: result})
                     }).catch(function(error){
                        res.status(100).json({code: 200, message: error, count: 0, data: []})
                    })                    
                }
                try {
                    await next();
                } catch (e) {
                    console.log('Process API error ...'  + e);
                    // res.response.status = 400;
                    // res.response.type = 'application/json';
                    // res.response.body = {
                    //     code: e.code || 'internal:unknown_error',
                    //     message: e.message || ''
                    // };
                }
            } else {
                await next();
            }
        }
    }
}