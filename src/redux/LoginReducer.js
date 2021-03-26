const loginState = {
    login: null,
}
export default function LoginReducer(state = loginState, action) {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                login: action.payload,
            }
        default:
            return state
    }

}
