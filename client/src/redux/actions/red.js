
/*
 * @Author: jianxi_lin 
 * @Date: 2018-04-02 16:51:36 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-04-09 16:51:32
 */

export const RED_REQUEST = 'red/RED_REQUEST';
export const RED_SUCCESS = 'red/RED_SUCCESS';
export const RED_FAIL = 'red/RED_FAIL';

export function red(userInfo) {
    var params = new URLSearchParams()
    params.append('mobile', userInfo.mobile)
    params.append('url', userInfo.url)
    return {
        types: [RED_REQUEST, RED_SUCCESS, RED_FAIL],
        promise: client => client.post(`/api/getRed`, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                // 'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T MicroMessenger) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36'              
            }
        })
    }
}