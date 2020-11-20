import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import allSignUpActions from '../../actions/signUpAction';
import {Redirect} from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';
import './SignUp.scss'




export default function SignUp() {
  
  const dispatch = useDispatch();
  const setSignUp = useSelector(state => state.signUpReducer)
  console.log('bububuubu', setSignUp)

  const { email, password, confirmPassword, fullName, isRegister, error } = setSignUp;
  
 
  

  if(isRegister){
   return (<Redirect to='/signin'/>)
  } else {
  
  return (<div>
    <form onSubmit={(e)=>{dispatch(allSignUpActions.postSignUp({email, password, fullName}, e))}} >
      <div className='form'>
      <TextField required type="email" label="Email" value={email} onChange={(e) => dispatch(allSignUpActions.setSignUpEmail(e.target.value))} />
      <TextField required type="password" label="Password"  value={password} onChange={e => dispatch(allSignUpActions.setSignUpPassword(e.target.value))} />
      <TextField required type="password" label="Password" value={confirmPassword} onChange={e => dispatch(allSignUpActions.setSignUpConfirmPassword(e.target.value))} />
      <TextField required type="text" label="Name" value={fullName} onChange={e => dispatch(allSignUpActions.setSignUpName(e.target.value))} />
      <Button type="submit" variant="contained" >Регистрация</Button>
      {error && <MuiAlert elevation={6} variant="filled" severity="error">Пользователь уже зарегестрирован, авторизуйтесь или зарегестрируйте нового пользователя.</MuiAlert>}
      </div>
    </form>
    
  </div>
  )};
  }