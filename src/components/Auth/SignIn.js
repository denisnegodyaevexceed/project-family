import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default function SignIn() {
  

  return (
    <form  autoComplete="off" onSubmit={''}>
      <TextField required type="email"  label="Email" />
      <TextField required type="password" id="standard-basic" label="Password" />
      <Button type="submit" variant="contained">Войти</Button>
    </form>
  );
}