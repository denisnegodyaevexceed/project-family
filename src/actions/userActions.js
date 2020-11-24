import actions from '../constants/actionsType'



const setUserSucces = (bool) => ({
    type: actions.SET_USER_SUCCES,
    payload: bool
});

const setUserError = (bool) => ({
    type: actions.SET_USER_ERROR,
    payload: bool
});



export default{
    setUserSucces,
    setUserError,

}