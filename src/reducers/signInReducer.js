const initialState = {
    email:'',
    password:'',
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