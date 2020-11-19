import actions from '../constants/actionsType'

// export const SignIn = () => {
//     return dispatch => {
        
//     }
// }

const setSignInEmail = data => ({
    type: actions.SET_SIGNIN_EMAIL,
    payload: data
});

const setSignInPassword = (data) => ({
    type: actions.SET_SIGNIN_PASSWORD,
    payload: data
});



export default{
    setSignInEmail,
    setSignInPassword,

}