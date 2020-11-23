import actions from "../constants/actionsType";
import jwt_decode from "jwt-decode";
import { postSignInUser, getUser } from "../api/loginServer";

const setSignInEmail = (data) => ({
    type: actions.SET_SIGNIN_EMAIL,
    payload: data,
});

const setSignInPassword = (data) => ({
    type: actions.SET_SIGNIN_PASSWORD,
    payload: data,
});

export const signInUser = (email, password) => {
    return (dispatch) => {
    dispatch(signInUserStarted());
    postSignInUser(email, password)
        .then((res) => {
        dispatch(signInUserSuccess(res));
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        let token = res.accessToken;
        let decoded = jwt_decode(token);
        const headers = {
            headers: { Authorization: `Bearer ${res.refreshToken}` },
        };
        dispatch(getUserAction(decoded.userId, headers));
        })
        .catch((err) => {
        console.log(err.message);
        dispatch(signInUserFailure(err.message));
        });
    };
};

const signInUserSuccess = (data) => ({
    type: actions.POST_SIGNIN_SUCCESS,
    payload: data,
});

const signInUserStarted = () => ({
  type: actions.POST_SIGNIN_REQUEST,
});

const signInUserFailure = (error) => ({
  type: actions.POST_SIGNIN_ERROR,
  payload: error,
});

const logoutUser = (bool) => ({
  type: actions.LOGOUT_USER,
  payload: bool,
});

const checkedToken = (bool) => ({
  type: actions.CHECKED_TOKEN,
  payload: bool,
});

export const getUserAction = (i, headers) => {
  return (dispatch) => {
    dispatch(getUserStarted());
    getUser(i, headers)
      .then((res) => {
        setTimeout(() => {
          dispatch(getUserSuccess(res && res.data && res.data.user));
        }, 1);
      })
      .catch((err) => {
        getUserFailure();
        alert(`ошибка сервера ${err.message}`);
      });
  };
};
const getUserStarted = () => ({
  type: actions.GET_USER_STARTED,
});
const getUserSuccess = (data) => ({
  type: actions.GET_USER_SUCCESS,
  payload: data,
});
const getUserFailure = (error) => ({
  type: actions.GET_USER_FAILURE,
  payload: error,
});

export default {
  setSignInEmail,
  setSignInPassword,
  signInUser,
  logoutUser,
  checkedToken,
  getUserAction,
};
