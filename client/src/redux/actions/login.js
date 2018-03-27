/*
 * @Author: jianxi_lin 
 * @Date: 2018-03-27 10:10:58 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-03-27 16:13:53
 */
export const LOGIN_REQUEST = 'red/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'red/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'red/LOGIN_FAIL';


export function login (user) {
    return {
        types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL],
        promise: client => client.get(`/api/login/${user.userName}/${user.passWord}`)
    }
}