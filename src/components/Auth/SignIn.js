import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import allSignInActions from "../../actions/signInAction"
import MuiAlert from '@material-ui/lab/Alert';
import allUserActions from "../../actions/userActions"

import api from "../../api/spendingLogin"


export default function SignIn() {


const dispatch = useDispatch();
const setSignIn = useSelector(state => state.SignInReducer);
const {email, password, isFetching, isAuth, error, userInfo} = setSignIn;
const validAuth = async (e) =>{
  e.preventDefault();
  dispatch(allSignInActions.signInUser(email,password))
  localStorage.setItem("uid", 'q');
  console.log(userInfo.fullName);
}



// if(localStorage.getItem("key")!= null)
//   console.log(localStorage.getItem("key"))
if(isAuth) return <Redirect to='/' />
  return (
    <form  autoComplete="off" onSubmit={e => validAuth(e)}>
      <TextField required type="email"  label="Email" value={setSignIn.email} onChange={e => dispatch(allSignInActions.setSignInEmail(e.target.value))}/>
      <TextField required type="password" id="standard-basic" label="Password" value={setSignIn.password} onChange={e => dispatch(allSignInActions.setSignInPassword(e.target.value))}/>
      <Button type="submit" variant="contained">Войти</Button>
      {error && <MuiAlert elevation={6} variant="filled" severity="error">Неверный email или пароль</MuiAlert>}
    </form>
  );
}