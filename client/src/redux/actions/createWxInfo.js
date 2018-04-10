export const WXINFO_REQUEST = 'red/WXINFO_RQUEST'
export const WXINFO_SUCCESS = 'red/WXINFO_SUCCESS'
export const WXINFO_FAIL = '/red/WXINFO_FAIL'

export function createWxInfo(tellphone, cookie, ewxshinfo) {

    var params = new URLSearchParams()
    params.append('tellphone', tellphone)
    params.append('wxCookie', cookie)
    params.append('ewxShinfo', ewxshinfo)
    return {
        types: [WXINFO_REQUEST, WXINFO_SUCCESS, WXINFO_FAIL],
        promise: client => client.post('/api/createCookie', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'                
            }
        })
    }

}