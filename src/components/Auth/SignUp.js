import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from 'react-redux';
import allSignUpActions from '../../actions/signUpAction'




export default function SignUp() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [nameUser, setNameUser] = useState('');
    // const validRegister = (e) =>{
    //     e.preventDefault()
    //     if (password === confirmPassword){
    //         console.log(email,password,confirmPassword,nameUser)
    //     }else{
        
    // }

    console.log(allSignUpActions,'sdfhhfjhjdfj')
    const dispatch = useDispatch();
    const setSignUp = useSelector(state => state.signUpReducer)

    const {email, password, confirmPassword, name} = setSignUp;
  
      
  return (<div>
    <form >
      <TextField  required type="email"  label="Email" value={email}  onChange={(e)=>  dispatch(allSignUpActions.setSignUpEmail(e.target.value))}/>
      <TextField required type="password"  label="Password" value={password} onChange={e=> dispatch(allSignUpActions.setSignUpPassword(e.target.value))} />
      <TextField required type="password"  label="Password" value={confirmPassword} onChange={e=> dispatch(allSignUpActions.setSignUpConfirmPassword(e.target.value))}/>
      <TextField required type="text" label="Name" value={name} onChange={e=> dispatch(allSignUpActions.setSignUpName(e.target.value))}/>
      <Button type="submit" variant="contained">Добавить</Button>
      
    </form>
    {!(password===confirmPassword) &&  <p>Пароли не совпадают!</p>}
    </div>
  );
}