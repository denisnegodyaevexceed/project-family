import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import allSignUpActions from '../../actions/signUpAction';
import {Redirect} from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';
import './SignUp.scss';
import CircularProgress from '@material-ui/core/CircularProgress';




export default function SignUp() {
  
  const dispatch = useDispatch();
  
  const setSignUp = useSelector(state => state.signUpReducer)
  const setSignIn = useSelector((state) => state.SignInReducer);
  
  const {isAuth} = setSignIn;
  const { email, password, confirmPassword, fullName, isRegister, error, isFetching } = setSignUp;

  const validPassword = password.length>7||password.length===0;

  const validConfirmPassword = password===confirmPassword&&password.length===confirmPassword.length;

  const budgetId = window.location.search.split('=')[1]

  


  if (isAuth) return <Redirect to="/" />;

  if(isRegister){
    return (<Redirect to='/signin'/>)
  } else {
  
  return (<div>
    {isFetching&& <div className='loading'><CircularProgress className='loader' /></div>}
    <form onSubmit={(e)=>{dispatch(allSignUpActions.postSignUp({email, password, fullName, budgetId}, e))}} >
      <div className='form'>
      <TextField required 
      type="email" 
      label="Почта" 
      value={email} 
      onChange={(e) => dispatch(allSignUpActions.setSignUpEmail(e.target.value))} />
      <TextField required 
      error={!validPassword} 
      helperText={!validPassword? 'Пароль сликшком короткий': ''}
      type="password" 
      label="Пароль"  
      value={password} 
      onChange={e => dispatch(allSignUpActions.setSignUpPassword(e.target.value))} />
      <TextField required 
      error={!validConfirmPassword} 
      helperText={!validConfirmPassword? 'Пароли должны совпадать': ''}
      type="password" 
      label="Подтверждение пароля" 
      value={confirmPassword} 
      onChange={e => dispatch(allSignUpActions.setSignUpConfirmPassword(e.target.value))} />
      <TextField required 
      type="text" 
      label="Имя" 
      value={fullName} 
      onChange={e => dispatch(allSignUpActions.setSignUpName(e.target.value))} />
      <Button type="submit" 
      variant="contained" 
      disabled={!(validPassword&&validConfirmPassword)||!(email && password && confirmPassword && fullName)}>Регистрация</Button>
      {error && <MuiAlert elevation={6} 
      variant="filled" 
      severity="error">Пользователь уже зарегестрирован, авторизуйтесь или зарегестрируйте нового пользователя.</MuiAlert>}
      </div>
    </form>
    
  </div>
  )};
  }