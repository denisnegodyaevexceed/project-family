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
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";




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
  const [state, setState] = React.useState({
    
    left: false,
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          <Button to="/" component={Link} color="inherit">
            Расход семьи
          </Button>,
          <Button to="/self" component={Link} color="inherit">
            Мои траты
          </Button>,
          <Button to="/family" component={Link} color="inherit">
            Моя Семья
          </Button>,
        ].map((text, index) => (
          <div className='burger-content'>
            <ListItemText primary={text} />
          </div>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {setSignIn.isAuth ? (
          <div className='burger'>
            {["Меню"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>
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

          <Typography variant="h6" className={classes.title}>
            Семейный бюджет
          </Typography>
          {!setSignIn.isAuth ? (
            <>
              <Button to="/signin" component={Link} color="inherit">
                Авторизация
              </Button>
              <Button
                to="/signup"
                component={Link}
                color="inherit"
                onClick={() => dispatch(allSignUpActions.isRegisterClear())}
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
