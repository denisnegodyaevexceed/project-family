import { combineReducers } from 'redux'
import signUpReducer from './signUpReducer'
import spendingReducer from './spendingReducer'
import SignInReducer from './signInReducer'
import forgotPasswordReducer from './forgotPasswordReducers'
import resetPasswordReducer from './resetPasswordsReducers'

export default combineReducers({
    SignInReducer,
    spendingReducer,
    signUpReducer,
    forgotPasswordReducer,
    resetPasswordReducer,
})
