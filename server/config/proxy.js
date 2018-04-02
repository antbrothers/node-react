/*
 * @Author: jianxi_lin 
 * @Date: 2018-04-02 14:40:46 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-04-02 15:00:02
 */

 module.exports = {
     proxyTable: {
         '/external': {
             target: 'http://www.123369.com.cn/api/ServiceCommunityIdList?communityID=0&city=0',
             changeOrigin: true,
             pathRewrite: {
                 '^/external': '/'
             }
         }
     }
 }