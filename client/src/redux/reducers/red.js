import { RED_REQUEST, RED_SUCCESS, RED_FAIL } from '../actions/red'
let initState = {
    code: 0,
    message: '',
    // data: [{
    //     bestLuck: false,
    //     coupon_price: '',
    //     dateStr: '',
    //     head_img_url: '',
    //     nick_name: ''
    // }] 
    data: {} 
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case RED_SUCCESS:
            return {
                code: action.result.data.code,
                message: action.result.data.message,
                data: action.result.data.data
            };
        case RED_FAIL: {
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