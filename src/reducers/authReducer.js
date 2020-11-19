const initialState = {
   email: '1',
   password: '1',
   confirmPassword: '1',
   name: '1'
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