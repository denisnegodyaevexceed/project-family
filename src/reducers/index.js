import { combineReducers } from 'redux'
import signUpReducer from './signUpReducer'
import spendingReducer from './spendingReducer'
import SignInReducer from './signInReducer'
import forgotPasswordReducer from './forgotPasswordReducers'
import resetPasswordReducer from './resetPasswordsReducers'
import familySelectReducer from './familySelectReducers'





export default combineReducers({
    SignInReducer,
    spendingReducer,
    signUpReducer,
    forgotPasswordReducer,
    resetPasswordReducer,
    familySelectReducer
})
