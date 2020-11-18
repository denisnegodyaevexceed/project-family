import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameUser, setNameUser] = useState('');
    const validRegister = (e) =>{
        e.preventDefault()
        if (password === confirmPassword){
            console.log(email,password,confirmPassword,nameUser)
        }else{
        
    }
    
      }
  return (
    <form  autoComplete="off" onSubmit={e => validRegister(e)}>
      <TextField  required type="email"  label="Email" value={email} onChange={event => setEmail(event.target.value)}  />
      <TextField required type="password" id="standard-basic" label="Password"value={password} onChange={event => setPassword(event.target.value)}  />
      <TextField required type="password" id="standard-basic" label="Password" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)}/>
      <TextField required type="text" id="standard-basic" label="Name"value={nameUser} onChange={event => setNameUser(event.target.value)} />
      <Button type="submit" variant="contained">Добавить</Button>
      {/* {password !== confirmPassword && <div>wrong</div>} */}
    </form>
  );
}