import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

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

 const Navbar=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        
        <Toolbar>
        <Button to="/" component={Link} color="inherit">На главную</Button>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
            {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography   variant="h6" className={classes.title}>
            Семейный бюджет
          </Typography>
          {/* <Link to="/signin" color="inherit"> */}
          <Button to="/signin" component={Link} color="inherit">Авторизация</Button>
          {/* </Link> */}
          <Button to="/signup" component={Link} color="inherit">Регистрация</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;