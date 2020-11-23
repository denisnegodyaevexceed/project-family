import React ,{useEffect} from 'react'
import jwt_decode from "jwt-decode";
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignInPage from './views/SignInPage';
import SignUpPage from './views/SignUpPage';
import MainPage from './views/MainPage';
import { useSelector, useDispatch } from 'react-redux';
import SignIn from './components/Auth/SignIn';
import allActions from "./actions/signInAction"


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
    }
  }, [dispatch])


  return (
    <BrowserRouter>
      <div className="App">

      <Navbar/>
        <div className='contnet'>
          <Switch>
            <Route exact path="/">
              {setUser.isAuth ===true?
                <MainPage /> 
                :
                <SignIn/>
              }
            </Route>
            <Route path="/signin" component={SignInPage}/>
            <Route path="/signup" component={SignUpPage}/>
          </Switch>
        </div>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
