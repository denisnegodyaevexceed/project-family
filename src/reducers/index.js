import { combineReducers } from 'redux'
import tableReducer from './tableReducer'
import spendingReducer from './spendingReducer'

export default combineReducers({
    tableReducer,
    spendingReducer,
})