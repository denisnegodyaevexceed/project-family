import { combineReducers } from 'redux'
import tableReducer from './tableReducer'
import SignInReducer from './signInReducer'
import userReducer from './userReducer'

export default combineReducers({
    tableReducer,
    SignInReducer,
    userReducer,
})