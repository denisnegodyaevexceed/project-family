const initialState = {
    email: '',
    password: '',
    error: false,
    isFetching: true,
    isAuth: false,
    userInfo: {},
}

export default function SignInReducer(state = initialState, actions) {
    switch (actions.type) {
        case 'SET_SIGNIN_EMAIL':
            return {
                ...state,
                email: actions.payload,
            }
        case 'SET_SIGNIN_PASSWORD':
            return {
                ...state,
                password: actions.payload,
            }
        case 'POST_SIGNIN_REQUEST':
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case 'POST_SIGNIN_SUCCESS':
            return {
                ...state,
                isFetching: false,
                error: false,
                userInfo: actions.payload,
            }
        case 'POST_SIGNIN_ERROR':
            return {
                ...state,
                error: true,
                isFetching: false,
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                isAuth: false,
            }

        case 'GET_USER_STARTED':
            return {
                ...state,
                isAuth: false,
                isFetching: true,
            }

        case 'GET_USER_SUCCESS':
            return {
                ...state,
                userInfo: actions.payload,
                isAuth: true,
                isFetching: false,
            }

        case 'GET_USER_FAILURE':
            return {
                ...state,
                isAuth: false,
            }

        case 'FETCHING_SET_FALSE':
            return {
                ...state,
                isFetching: false,
            }

        case 'SET_USER_BUDGET_ID':
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    budget: actions.payload
                }
            }
        case 'POST_SIGNUP_REQUEST':
            return{
                ...state,
                email: '',
                password: '',
                error: false
            }

        default:
            return state
    }
}

