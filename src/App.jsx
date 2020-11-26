import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import SignInPage from './views/SignInPage';
import SignUpPage from './views/SignUpPage';
import MainPage from './views/MainPage';
import SignIn from './components/Auth/SignIn';
import PageError from './components/page404/Page404';
import ForgotPassword from './components/forgotPassword/forgotPassword'
import ResetPassword from './components/forgotPassword/resetPassword'
import Family from './components/Family/Family'
import Select from './components/Select/Select'
import Navbar from './components/Navbar/Navbar';
import allActions from "./actions/signInAction"
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const setUser = useSelector(state => state.SignInReducer);
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      let token = localStorage.getItem('accessToken');
      let decoded = jwt_decode(token);
      const headers = {
        headers: { Authorization: `Bearer ${localStorage.getItem('refreshToken')}` },
      };
      dispatch(allActions.getUserAction(decoded.userId, headers));
    } else {
      dispatch(allActions.fetchEnd());
    }
  }, [dispatch])

  if (setUser.isFetching) {
    return (
      <CircularProgress className='loader' />
    )
  }
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />
        <div className='contnet'>
          <Switch>
            <Route exact path="/">
              {setUser.isAuth === true ?
                <MainPage />
                :
                <SignIn />
              }
            </Route>
            <Route path="/self">
              {setUser.isAuth === true ?
                <MainPage isSelf={true} />
                :
                <SignIn />
              }
            </Route>
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/join" component={SignUpPage} />
            <Route path="/select" component={Select} />
            <Route path="/family" component={setUser.isAuth ? Family : SignInPage} />
            <Route component={PageError} />
          </Switch>
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
