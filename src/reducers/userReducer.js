const initialState = {
    isAuth:false,
}

export default function userReducer(state = initialState, actions){
    switch(actions.type) {
        case 'SET_USER_SUCCES':
            return {
                ...state,
                isAuth:true,
            }
        case 'SET_USER_ERROR':
            return {
                ...state,
                isAuth:false,
            }

        default:
            return state
    }
}