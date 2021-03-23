const loginState = {
    data: ''
}
export default function LoginReducer(state = loginState, action) {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state
    }

}
