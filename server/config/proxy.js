/*
 * @Author: jianxi_lin 
 * @Date: 2018-04-02 14:40:46 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-04-03 10:40:15
 */

 module.exports = {
     proxyTable: {
         '/external': {
             target: 'https://activity.waimai.meituan.com/coupon/grabShareCoupon',
             changeOrigin: true,
             pathRewrite: {
                 '^/external': '/'
             }
         },
         '/extget': {
             target: 'http://www.123369.com.cn/api/Jkb/GetHomeJKBList',
             changeOrigin: true,
             pathRewrite: {
                 '^/extget': '/'
             }
         }
     }
 }