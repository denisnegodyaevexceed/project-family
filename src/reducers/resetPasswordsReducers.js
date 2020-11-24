const initialState = {
    isFetching: false,
    error: false,
    password: '',
    confirmPassword: false,
}

export default function resetPasswordReducer (state=initialState, actions) {
    switch(actions.type){
        case 'SET_RESETPASSWORD_PASSWORD':
            return{
                ...state,
                password: actions.payload
            }
        case 'POST_RESETPASSWORD_REQUEST':
            return {
                ...state,
                isFetching: true
            }
        case 'POST_RESETPASSWORD_SUCCESS':
            return {
                ...state,
                isFetching: false,
                confirmEmail: true,
            } 
        case 'POST_RESETPASSWORD_ERROR':
            return {
                ...state,
                isFetching: false,
                error: true
            }  
        default :
        return state     
    }
}