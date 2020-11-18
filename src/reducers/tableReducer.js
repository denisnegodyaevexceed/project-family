const initialState = {
    error:false,
    loading:false,
    tableList:[{name:1}],
}

export default function tableReducer(state = initialState, actions){
    switch(actions.type) {
        case 'GET_TABLE_LIST_SUCCESS':
            return{
                ...state,
                loading: false,
                tableList: actions.payload,
            }

        case 'GET_TABLE_LIST_STARTED':
            return{
                ...state,
                loading: true,
                error: false,

            }
        case 'GET_TABLE_LIST_FAILURE':
            return{
                ...state,
                loading: false,
                error: actions.payload,
            }

        default:
            return state
    }
}

