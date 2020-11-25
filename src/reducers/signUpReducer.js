const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    isFetching: false,
    isRegister: false,
    error: false
}

export default function signUpReducer(state = initialState, actions) {
    switch (actions.type) {
        case 'SET_SIGNUP_EMAIL':
            return {
                ...state,
                email: actions.payload,
            }
        case 'SET_SIGNUP_PASSWORD':
            return {
                ...state,
                password: actions.payload,
            }
        case 'SET_SIGNUP_CONFIRM_PASSWORD':
            return {
                ...state,
                confirmPassword: actions.payload,
            }
        case 'SET_SIGNUP_NAME':
            return {
                ...state,
                fullName: actions.payload,
            }
        case 'POST_SIGNUP_REQUEST':
            return {
                ...state,
                isFetching: true
            }
        case 'POST_SIGNUP_SUCCESS':
            return {
                ...state,
                isFetching: false,
                isRegister: true,

            }
        case 'POST_SIGNUP_ERROR':
            return {
                ...state,
                error: true,
                isFetching: false,
            }
        case 'SET_SIGNUP_ISREGISTER':
            return {
                ...state,
                isRegister: false,
                fullName: '',
                password: '',
                confirmPassword: '',
                email: '',
                error: false,
            }

        default: return state
    }
}