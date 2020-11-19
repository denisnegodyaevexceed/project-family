import actions from '../constants/actionsType'

export const setSignUpEmail = (data) => ({
    type: actions.SET_SIGNUP_EMAIL,
    payload: data
})

export const setSignUpPassword = (data) => ({
    type: actions.SET_SIGNUP_PASSWORD,
    payload: data
})

export const setSignUpConfirmPassword = (data) => ({
    type: actions.SET_SIGNUP_CONFIRM_PASSWORD,
    payload: data
})

export const setSignUpName = (data)=> ({
    type: actions.SET_SIGNUP_NAME,
    payload: data
})

export default{
    setSignUpConfirmPassword,
    setSignUpEmail,
    setSignUpPassword,
    setSignUpName
}