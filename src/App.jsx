import React ,{useEffect} from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignInPage from './views/SignInPage';
import SignUpPage from './views/SignUpPage';
import MainPage from './views/MainPage';
import { useSelector, useDispatch } from 'react-redux';
import allUserActions from "./actions/userActions"
function App() {
  const dispatch = useDispatch();
const setUser = useSelector(state => state.userReducer);
console.log(setUser)
useEffect(() => {
  if (localStorage.getItem('uid') === 'q' ){
    dispatch(allUserActions.setUserSucces())
  }
}, [dispatch])



  return (
    <BrowserRouter>
      <div className="App">

      <Navbar/>
        <div className='contnet'>
          <Switch>
            <Route exact path="/">
              {setUser.isAuth ?
                <MainPage /> 
                :
                <div>loh</div>
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
