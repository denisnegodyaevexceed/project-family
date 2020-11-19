const initialState = {
   email: '',
   password: '',
   confirmPassword: '',
   name: ''
}

export default function signUpReducer(state=initialState, actions){
    switch(actions.type){
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
                name: actions.payload,
            }

        default: return state
    }
}