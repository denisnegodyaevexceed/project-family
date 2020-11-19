const initialState = {
    date: new Date(),
    name: '',
    value: '',
    isEdit: false,
    id: '',
    choosenDeleteSpendings: [],
}

export default function spendingReducer(state = initialState, actions){
    switch(actions.type) {
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

        case 'SET_DELETE_SPENDINGS' :
            return{
                ...state,
                choosenDeleteSpendings: actions.payload,
            }

        default:
            return state
    }
}