import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux'
import allSignInActions from "../../actions/signInAction"
import allUserActions from "../../actions/userActions"




export default function SignIn() {

const setUser = useSelector(state => state.userReducer.isAuth)
const dispatch = useDispatch();
const setSignIn = useSelector(state => state.SignInReducer);
const validAuth = (e) =>{
  console.log(setSignIn.email,setSignIn.password)
  e.preventDefault();
  localStorage.setItem("uid", 'q');
  dispatch(allUserActions.setUserSucces())

}
console.log(setUser)


// if(localStorage.getItem("key")!= null)
//   console.log(localStorage.getItem("key"))

  return (
    <form  autoComplete="off" onSubmit={e => validAuth(e)}>
      <TextField required type="email"  label="Email" value={setSignIn.email} onChange={e => dispatch(allSignInActions.setSignInEmail(e.target.value))}/>
      <TextField required type="password" id="standard-basic" label="Password" value={setSignIn.password} onChange={e => dispatch(allSignInActions.setSignInPassword(e.target.value))}/>
      <Button type="submit" variant="contained">Войти</Button>
    </form>
  );
}