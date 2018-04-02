/*
 * @Author: jianxi_lin 
 * @Date: 2018-04-02 16:51:36 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-04-02 16:55:44
 */

 export const RED_REQUEST = 'red/RED_REQUEST';
 export const RED_SUCCESS = 'red/RED_SUCCESS';
 export const RED_FAIL = 'red/RED_FAIL';
 
 export function red() {
     return {
         types: [RED_REQUEST, RED_SUCCESS, RED_FAIL],
         promise: client => client.get(`externale`)
     }
 }