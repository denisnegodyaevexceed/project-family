import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect,Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import allSignInActions from "../../actions/signInAction";
import MuiAlert from "@material-ui/lab/Alert";
import Typography from '@material-ui/core/Typography';
import './SignIn.scss'


export default function SignIn() {
  const dispatch = useDispatch();
  const setSignIn = useSelector((state) => state.SignInReducer);
  const { email, password, isAuth, error } = setSignIn;
  const validAuth = (e) => {
    e.preventDefault();
    dispatch(allSignInActions.signInUser(email, password));
    localStorage.setItem("uid", "q");
  };


  if (isAuth) return <Redirect to="/" />;
  return (
    <form autoComplete="off" onSubmit={(e) => validAuth(e)}>
      <div className='form'>
      <TextField
        required
        type="email"
        label="Email"
        value={setSignIn.email}
        onChange={(e) =>
          dispatch(allSignInActions.setSignInEmail(e.target.value))
        }
      />
      <TextField
        required
        type="password"
        id="standard-basic"
        label="Password"
        value={setSignIn.password}
        onChange={(e) =>
          dispatch(allSignInActions.setSignInPassword(e.target.value))
        }
      />
      <Button type="submit" variant="contained">
        Войти
      </Button>
      {error && (
        <MuiAlert elevation={6} variant="filled" severity="error">
          Неверный email или пароль
        </MuiAlert>
      )}
      </div>
      
      <Typography className='linkRegister' to="/signup" component={Link}  >Регистрация</Typography>
      <Typography className='linkRegister'  to="/" component={Link}  >Забыли пароль?</Typography>
      
            
      
    </form>
  );
}
