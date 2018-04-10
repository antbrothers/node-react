import { WXINFO_REQUEST, WXINFO_SUCCESS, WXINFO_FAIL } from "../actions/createWxInfo";

let initState = {
    code: 0,
    message: '',
    data: {}
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case WXINFO_SUCCESS:
            return {
                code: action.result.data.code,
                message: action.result.data.message,
                data: action.result.data.data
            };
        case WXINFO_FAIL:
            return {
                code: action.result.data.code,
                message: action.result.data.message,
                data: action.result.data.data
            };
        default:
            return state;
    }
}