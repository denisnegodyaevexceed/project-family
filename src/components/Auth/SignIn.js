import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux'
import allSignInActions from "../../actions/signInAction"




export default function SignIn() {
const dispatch = useDispatch();
const listData = useSelector(state => state.SignInReducer);
const validAuth = (e) =>{
  e.preventDefault();
  localStorage.setItem("key", "q");
      
}


// if(localStorage.getItem("key")!= null)
//   console.log(localStorage.getItem("key"))

  return (
    <form  autoComplete="off" onSubmit={e => validAuth(e)}>
      <TextField required type="email"  label="Email" value={listData.email} onChange={e => dispatch(allSignInActions.setSignInEmail(e.target.value))}/>
      <TextField required type="password" id="standard-basic" label="Password" value={listData.password} onChange={e => dispatch(allSignInActions.setSignInPassword(e.target.value))}/>
      <Button type="submit" variant="contained">Войти</Button>
    </form>
  );
}