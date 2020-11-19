import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import allSignUpActions from '../../actions/signUpAction';
import axios from 'axios';
import {Redirect} from 'react-router-dom';




export default function SignUp() {
  const [isRegister, setIsRegister] = useState(false)
  console.log(isRegister)

  const dispatch = useDispatch();
  const setSignUp = useSelector(state => state.signUpReducer)

  const { email, password, confirmPassword, fullName } = setSignUp;

  async function postSignIn(e) {
    e.preventDefault()
    
    const { data : user } = await axios.post('https://backend-family-budget.herokuapp.com/auth/signup', {
      email,
      password,
      fullName
    })
    if(user){
      setIsRegister(true)
    }
    return user;
  }

  if(isRegister){
    return <Redirect to='/signin'/>
  } else {
  
  return (<div>
    <form >
      <TextField required type="email" label="Email" value={email} onChange={(e) => dispatch(allSignUpActions.setSignUpEmail(e.target.value))} />
      <TextField required type="password" label="Password" value={password} onChange={e => dispatch(allSignUpActions.setSignUpPassword(e.target.value))} />
      <TextField required type="password" label="Password" value={confirmPassword} onChange={e => dispatch(allSignUpActions.setSignUpConfirmPassword(e.target.value))} />
      <TextField required type="text" label="Name" value={fullName} onChange={e => dispatch(allSignUpActions.setSignUpName(e.target.value))} />
      <Button type="submit" variant="contained" onClick={(e) => postSignIn(e)}>Добавить</Button>

    </form>
    {password && confirmPassword && password.length <= confirmPassword.length && !(password === confirmPassword) && <p>Пароли не совпадают!</p>}
  </div>
  )};
}