const initialState = {
    date: new Date(),
    name: '',
    value: '',
    isEdit: false,
    id: '',
    errorTable:false,
    loadingTable:false,
    tableList:[],
    loadingModal: false,
    errorModal: false
}

export default function spendingReducer(state = initialState, actions){
    switch(actions.type) {
        case 'GET_TABLE_LIST_SUCCESS':
            return{
                ...state,
                loadingTable: false,
                tableList: actions.payload,
            }

        case 'GET_TABLE_LIST_STARTED':
            return{
                ...state,
                loadingTable: true,
                errorTable: false,

            }
        case 'GET_TABLE_LIST_FAILURE':
            return{
                ...state,
                loadingTable: false,
                errorTable: actions.payload,
            }

        case 'SET_DATE_SPENDING':
            return{
                ...state,
                date: actions.payload,
            }

        case 'SET_NAME_SPENDING':
            return{
                ...state,
                name: actions.payload,

            }
        case 'SET_VALUE_SPENDING':
            return{
                ...state,
                value: actions.payload,
            }

        case 'SET_IS_EDIT_SPENDING':
            return{
                ...state,
                isEdit: actions.payload,
            }

        case 'SET_ID_SPENDING':
            return{
                ...state,
                id: actions.payload,
            }

        case 'CLEAR_SPENDING_FORM':
            return{
                ...state,
                date: new Date(),
                name: '',
                value: '',
                isEdit: false,
                id: '',
            }

        case 'POST_NEW_SPENDING_STARTED' :
            return{
                ...state,
                loadingModal: true,
                errorModal: false,
            }

        case 'POST_NEW_SPENDING_SUCCESS' :
            return{
                ...state,
                tableList: actions.payload,
                loadingModal: false,
            }

        case 'POST_NEW_SPENDING_FAILURE' :
            return{
                ...state,
                loadingModal: false,
                errorModal: true,
            }

        case 'DEL_SPENDING_STARTED' :
            return{
                ...state,
            }

        case 'DEL_SPENDING_SUCCESS' :
            return{
                ...state,
            }

        case 'DEL_SPENDING_FAILURE' :
            return{
                ...state,
            }

        case 'PUT_EDIT_SPENDING_STARTED' :
            return{
                ...state,
                loadingModal:true,
                errorModal: false
            }

        case 'PUT_EDIT_SPENDING_SUCCESS' :
            return{
                ...state,
                tableList: actions.payload,
                loadingModal:false,
            }

        case 'PUT_EDIT_SPENDING_FAILURE' :
            return{
                ...state,
                errorModal: actions.payload,
                loadingModal: false,
            }

        default:
            return state
    }
}