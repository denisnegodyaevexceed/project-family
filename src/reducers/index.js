import { combineReducers } from 'redux'
import tableReducer from './tableReducer'
import SignInReducer from './signInReducer'

export default combineReducers({
    tableReducer,
    SignInReducer,
})