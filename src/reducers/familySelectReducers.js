const initialState = {
    error: false,
    data: [],
    isFetching: false,
    isSend: false,
    selectFamily: ''
}

const familySelectReducer = (state = initialState, actions) => {
    switch(actions.type){
        case 'GET_FAMILYNAMES_REQUEST':
            return{
                ...state,
                isFetching: true
            }
        case 'GET_FAMILYNAMES_SUCCESS':
            return{
                ...state,
                isFetching: false,
                data: actions.payload
            }
        case 'GET_FAMILYNAMES_ERROR':
            return{
                ...state,
                isFetching: false,
                error: true
            }
        case 'POST_FAMILYID_REQUEST':
            return{
                ...state,
                isFetching: true,
                error: false
            }
        case 'POST_FAMILYID_SUCCESS':
            return{
                ...state,
                isFetching: false,
                isSend: true,
                selectFamily: actions.payload
            }
        case 'POST_FAMILYID_ERROR':
            return{
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}



export default familySelectReducer