
const initialState = {
    isFetching: false,
    error: false,
    email: '',
    confirmEmail: false,
}

export default function forgotPasswordReducer (state=initialState, actions) {
    switch(actions.type){
        case 'SET_FORGOTPASSWORD_EMAIL':
            return{
                ...state,
                email: actions.payload
            }
        case 'POST_FORGOTPASSWORD_REQUEST':
            return {
                ...state,
                isFetching: true
            }
        case 'POST_FORGOTPASSWORD_SUCCESS':
            return {
                ...state,
                isFetching: false,
                confirmEmail: true,
            } 
        case 'POST_FORGOTPASSWORD_ERROR':
            return {
                ...state,
                isFetching: false,
                error: true
            }  
        default :
        return state     
    }
}