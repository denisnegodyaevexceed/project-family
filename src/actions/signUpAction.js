import axios from 'axios'
import actions from '../constants/actionsType'

const setSignUpEmail = (data) => ({
    type: actions.SET_SIGNUP_EMAIL,
    payload: data
})

const setSignUpPassword = (data) => ({
    type: actions.SET_SIGNUP_PASSWORD,
    payload: data
})

const setSignUpConfirmPassword = (data) => ({
    type: actions.SET_SIGNUP_CONFIRM_PASSWORD,
    payload: data
})

const setSignUpName = (data) => ({
    type: actions.SET_SIGNUP_NAME,
    payload: data
})

const postSignUp = ({ email, password, fullName , budgetId}, e) => {
    return function (dispatch) {
        dispatch({
            type: actions.POST_SIGNUP_REQUEST,
        })
        async function signUp({ email, password, fullName, budgetId}, e) {
            e.preventDefault()
            try {
                const { data: user } = await axios.post('https://backend-family-budget.herokuapp.com/auth/signup', {
                    email,
                    password,
                    fullName,
                    budgetId
                })
                dispatch({
                    type: actions.POST_SIGNUP_SUCCESS,
                    payload: user,
                })
            } catch {
                dispatch({
                    type: actions.POST_SIGNUP_ERROR,
                    error: true,
                    isFetching: false,

                })
            }




        }
        signUp({ email, password, fullName, budgetId },  e)
    }

}

const isRegisterClear = () =>({
    type: actions.SET_SIGNUP_ISREGISTER,
    
})



const allSignUpActions = {
    setSignUpConfirmPassword,
    setSignUpEmail,
    setSignUpPassword,
    setSignUpName,
    postSignUp,
    isRegisterClear
}

export default allSignUpActions;