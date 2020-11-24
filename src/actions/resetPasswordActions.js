import axios from 'axios'
import actions from '../constants/actionsType'


export const setResetPassword = (data) => ({
    type: actions.SET_RESETPASSWORD_PASSWORD,
    payload: data
})

export const postResetPassword = ({ password }, e) => {
    return function (dispatch) {
        console.log(password)
        dispatch({
            type: actions.POST_RESETPASSWORD_REQUEST,
        })
        async function postPassword({ password }, e) {
            e.preventDefault()
            try {
                const { data: user } = await axios.post('https://backend-family-budget.herokuapp.com/auth/reset-password?userId=5fb7a5f2572a7b00046c63c1', {
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
        postPassword({ password }, e)
    }

}

export default {
    postResetPassword,
    setResetPassword,
}