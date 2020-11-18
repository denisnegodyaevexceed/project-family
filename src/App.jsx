import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignInPage from './views/SignInPage';
import SignUpPage from './views/SignUpPage';
import MainPage from './views/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

      <Navbar/>
        <div className='contnet'>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/signin" component={SignInPage}/>
            <Route path="/signup" component={SignUpPage}/>
          </Switch>
        </div>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
