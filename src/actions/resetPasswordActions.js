import axios from 'axios'
import actions from '../constants/actionsType'


const setResetPassword = (data) => ({
    type: actions.SET_RESETPASSWORD_PASSWORD,
    payload: data
})
const setResetConfirmPassword = (data) => ({
    type: actions.SET_RESETCONFIRMPASSWORD_PASSWORD,
    payload: data
})

const postResetPassword = ({ password }, e, id ) => {
    return function (dispatch) {
        
        dispatch({
            type: actions.POST_RESETPASSWORD_REQUEST,
        })
        async function postPassword({ password }, e,id) {
            e.preventDefault()
            try {
                const { data: user } = await axios.post(`https://backend-family-budget.herokuapp.com/auth/reset-password?userId=${id}`, {
                    password,
                    })
                dispatch({
                    type: actions.POST_RESETPASSWORD_SUCCESS,
                    payload: user,
                })
            } catch {
                dispatch({
                    type: actions.POST_RESETPASSWORD_ERROR,
                    error: true,
                    isFetching: false,

                })
            }




        }
        postPassword({ password }, e, id)
    }

}

const allResetPasswordActions = {
    postResetPassword,
    setResetPassword,
    setResetConfirmPassword,
}

export default allResetPasswordActions;