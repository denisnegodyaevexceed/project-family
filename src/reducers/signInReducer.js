const initialState = {
    email:'',
    password:'',
    error:false,
    isFetching:false,
    isAuth:false,
    userInfo: {},
}

export default function SignInReducer(state = initialState, actions){
    switch(actions.type) {
        case 'SET_SIGNIN_EMAIL':
            return {
                ...state,
                email:actions.payload,
            }
        case 'SET_SIGNIN_PASSWORD':
            return {
                ...state,
                password:actions.payload,
            }
        case 'POST_SIGNIN_REQUEST':
            return{
                ...state,
                isFetching:true,
                error: false,
            }
        case 'POST_SIGNIN_SUCCESS':
            return{
                ...state,
                isFetching:false,
                error: false,
                isAuth:true,
                userInfo:actions.payload,
            }
        case 'POST_SIGNIN_ERROR':
            return{
                ...state,
                error:true,
                isFetching:false,
            }
        case 'LOGOUT_USER':
            return{
                ...state,
                isAuth:false,
            }
        case 'CHECKED_TOKEN':
            return{
                ...state,
                isAuth:true,
            }

        default:
            return state
    }
}


        // case 'GET_SIGN_SUCCESS':
        //     return{
        //         ...state,
        //         tableList: actions.payload,
        //     }

        // case 'GET_SIGN_STARTED':
        //     return{
        //         ...state,
        //         loading: true,
        //         error: false,

        //     }
        // case 'GET_SIGN_FAILURE':
        //     return{
        //         ...state,
        //         loading: false,
        //         error: actions.payload,
        //     }