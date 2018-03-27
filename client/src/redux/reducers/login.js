import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/login';

let initState = {
    code: 0,
    message: '',
    data: {}
}

export default function reducer(state = initState, action) {
    switch (action.type) {        
        case LOGIN_SUCCESS:
            return {
                code: action.result.data.code,
                message: action.result.data.message,
                data: action.result.data.data
            };
        case LOGIN_FAIL: {
            return {
                code: action.result.data.code,
                message: action.result.data.message,
                data: action.result.data.data
            }
        };
        default:
            return state;
    }
}