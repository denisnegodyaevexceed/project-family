import { combineReducers } from 'redux'
import tableReducer from './tableReducer'
import spendingReducer from './spendingReducer'
import SignInReducer from './signInReducer'

export default combineReducers({
    tableReducer,
    SignInReducer,
    spendingReducer,
})