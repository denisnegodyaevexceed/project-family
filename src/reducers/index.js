import { combineReducers } from 'redux'
import signUpReducer from './signUpReducer'
import spendingReducer from './spendingReducer'
import SignInReducer from './signInReducer'

export default combineReducers({
    SignInReducer,
    spendingReducer,
    signUpReducer,
})
