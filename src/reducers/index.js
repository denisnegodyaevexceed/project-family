import { combineReducers } from 'redux'
import tableReducer from './tableReducer'
import signUpReducer from './authReducer'
import spendingReducer from './spendingReducer'
import SignInReducer from './signInReducer'
import userReducer from './userReducer'

export default combineReducers({
    tableReducer,
    SignInReducer,
    spendingReducer,
    signUpReducer,
    userReducer,
})
