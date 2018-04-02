/*
 * @Author: jianxi_lin 
 * @Date: 2018-04-02 14:40:46 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-04-02 17:34:17
 */

 module.exports = {
     proxyTable: {
         '/external': {
             target: 'https://activity.waimai.meituan.com/coupon/grabShareCoupon',
             changeOrigin: true,
             pathRewrite: {
                 '^/external': '/'
             }
         }
     }
 }