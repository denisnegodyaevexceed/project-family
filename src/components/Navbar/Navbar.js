import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import allSignUpActions from "../../actions/signUpAction";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import allSignInActions from "../../actions/signInAction";
import Menu from '@material-ui/core/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


import "./Navbar.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const setSignIn = useSelector((state) => state.SignInReducer);

  const classes = useStyles();
  const Exit = () => {
    localStorage.clear();
    dispatch(allSignInActions.logoutUser());
    history.go(0);
  };
 
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {setSignIn.isAuth ? (
          <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
            Меню
          </Button>
          <Menu {...bindMenu(popupState)}>
          <Button to="/" component={Link} color="inherit">
            Расход семьи
          </Button>
          <Button to="/self" component={Link} color="inherit">
            Мои траты
          </Button>
          <Button to="/family" component={Link} color="inherit">
            Моя Семья
          </Button>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
          ):(null)
        }
          {/* <Button to="/" component={Link} color="inherit">
            Расход семьи
          </Button>
          {userData.userInfo.budget ? (
            <>
              {setSignIn.isAuth ? (
                <Button to="/self" component={Link} color="inherit">
                  Мои траты
                </Button>
              ) : null}
              {setSignIn.isAuth ? (
                <Button to="/family" component={Link} color="inherit">
                  Моя Семья
                </Button>
              ) : null}
            </>
          ) : null} */}
          <div className='app-tittle'>
          <Typography variant="h6" className={classes.title}>
            Семейный бюджет
          </Typography>
          </div>
          <div className='auth-buttons'>{!setSignIn.isAuth ? (
            <>
              <Button to="/signin" className='auth-nav' component={Link} color="inherit">
                Авторизация
              </Button>
              <Button
                to="/signup"
                component={Link}
                color="inherit"
                onClick={() => dispatch(allSignUpActions.isRegisterClear())}
                className='auth-nav'
              >
                Регистрация
              </Button>
            </>
          ) : (
            <>
              <span>Привет, {setSignIn.userInfo.fullName}</span>
              <Button to="/" component={Link} color="inherit" onClick={Exit}>
                Выход
              </Button>
            </>
          )}
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
