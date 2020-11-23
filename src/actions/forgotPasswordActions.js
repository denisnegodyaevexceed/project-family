import axios from 'axios'
import actions from '../constants/actionsType'


export const setForgotPasswordEmail = (data) => ({
    type: actions.SET_FORGOTPASSWORD_EMAIL,
    payload: data
})

export const postForgotPasswordEmail = ({ email }, e) => {
    return function (dispatch) {
        dispatch({
            type: actions.POST_FORGOTPASSWORD_REQUEST,
        })
        async function postEmail({ email }, e) {
            e.preventDefault()
            try {
                const { data: user } = await axios.post('https://backend-family-budget.herokuapp.com/auth/signup', {
                    email,
                    })
                dispatch({
                    type: actions.POST_FORGOTPASSWORD_SUCCESS,
                    payload: user,
                })
            } catch {
                dispatch({
                    type: actions.POST_FORGOTPASSWORD_ERROR,
                    error: true,
                    isFetching: false,

                })
            }




        }
        postEmail({ email }, e)
    }

}

export default {
    postForgotPasswordEmail,
    setForgotPasswordEmail,
}