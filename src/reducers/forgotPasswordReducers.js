
const initialState = {
    isFetching: false,
    error: false,
    email: '',
    confirmEmail: false,
    id: '',
}

export default function forgotPasswordReducer(state = initialState, actions) {
    switch (actions.type) {
        case 'SET_FORGOTPASSWORD_EMAIL':
            return {
                ...state,
                email: actions.payload
            }
        case 'POST_FORGOTPASSWORD_REQUEST':
            return {
                ...state,
                isFetching: true,

            }
        case 'POST_FORGOTPASSWORD_SUCCESS':
            return {
                ...state,
                isFetching: false,
                confirmEmail: true,
                id: actions.payload
            }
        case 'POST_FORGOTPASSWORD_ERROR':
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case 'POST_RESETPASSWORD_SUCCESS':
            return {
                ...state,
                confirmEmail: false,
                email: '',
                id: ''
            }
        case 'SET_FORGOTPASSWORD_CLEAN':
            return {
                ...state,
                confirmEmail: false,
            }
        default:
            return state
    }
}