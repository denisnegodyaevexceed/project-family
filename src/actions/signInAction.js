import actions from '../constants/actionsType'
import {postSignInUser}  from '../api/spendingLogin'

const setSignInEmail = data => ({
    type: actions.SET_SIGNIN_EMAIL,
    payload: data
});

const setSignInPassword = (data) => ({
    type: actions.SET_SIGNIN_PASSWORD,
    payload: data
});


export const signInUser = (email, password) => {
    return dispatch => {
        dispatch(signInUserStarted());
        postSignInUser(email, password).then(res =>{
            // TODO записать юзера
            console.log(res)
            dispatch(signInUserSuccess(res));
        }).catch(err => {
            console.log(err.message)
            dispatch(signInUserFailure(err.message));
        });
    }
}

const signInUserSuccess = data => ({
    type: actions.POST_SIGNIN_SUCCESS,
    payload: data
});

const signInUserStarted = () => ({
    type: actions.POST_SIGNIN_REQUEST
});

const signInUserFailure = error => ({
    type: actions.POST_SIGNIN_ERROR,
    payload: error,
});
const logoutUser = bool=>({
    type:actions.LOGOUT_USER,
    payload:bool,
})

const checkedToken = bool=>({
    type:actions.CHECKED_TOKEN,
    payload:bool,
})

export default{
    setSignInEmail,
    setSignInPassword,
    signInUser,
    logoutUser,
    checkedToken
}