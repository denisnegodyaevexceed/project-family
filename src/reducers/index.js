import { combineReducers } from 'redux'
import signUpReducer from './signUpReducer'
import spendingReducer from './spendingReducer'
import SignInReducer from './signInReducer'
import userReducer from './userReducer'

export default combineReducers({
    SignInReducer,
    spendingReducer,
    signUpReducer,
    userReducer,
})
