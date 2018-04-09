/*
 * @Author: jianxi_lin 
 * @Date: 2018-03-23 14:55:34 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-04-09 16:06:17
 */
module.exports = {
    APIError: function(code, message) {
        this.code = code || 'internal: unknown_error';
        this.message = message || '';
    },
    restify: () => {       
        return async (req, res, next) => {       
            if (req.url.substring(0, 5) === '/api/') {                
                res.rest = (data) => {
                    res.set({
                        'Content-Type': 'application/json;charset=utf-8',                      
                    })                  
                    if (typeof data.products.then == 'function') {
                        data.products.then(result => {
                            res.status(200).json({code: 200, message: '请求成功', data: result})
                         }).catch(function(error){
                            res.status(100).json({code: 200, message: error, data: []})
                        })   
                    } else {
                        res.status(200).json(data.products)
                    }
                                                      
                }
                try {
                    await next();
                } catch (e) {                   
                    res.set({
                        'Content-Type': 'application/json;charset=utf-8',   
                    })
                    res.status(e.code).json({
                        code: e.code,
                        message: e.message
                    })                   
                }
            } else {
                await next();
            }
        }
    }
}