import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignInPage from './views/SignInPage';
import SignUpPage from './views/SignUpPage';
import MainPage from './views/MainPage';
import { useSelector, useDispatch } from 'react-redux';
import SignIn from './components/Auth/SignIn';
import PageError from './components/page404/Page404';
import allActions from "./actions/signInAction"
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {
  const dispatch = useDispatch();
  const setUser = useSelector(state => state.SignInReducer);
  useEffect(() => {
    if (localStorage.getItem('accessToken')){
      let token = localStorage.getItem('accessToken');
      let decoded = jwt_decode(token);
      const headers = {
        headers: { Authorization: `Bearer ${localStorage.getItem('refreshToken')}` },
      };
      dispatch(allActions.getUserAction(decoded.userId, headers));
    }else{
      dispatch(allActions.fetchEnd());
    }
  }, [dispatch])

  if (setUser.isFetching){
    return(
      // <div className="loader"></div>
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
              {setUser.isAuth ===true?
                <MainPage isSelf={true} /> 
                :
                <SignIn/>
              }
            </Route>
            <Route path="/signin" component={SignInPage}/>
            <Route path="/signup" component={SignUpPage}/>
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route  component={PageError} />
          </Switch>
        </div>
        

      </div>
    </BrowserRouter>
  );
}

export default App;
