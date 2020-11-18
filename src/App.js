import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Table from './components/Table/Table';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Table} />
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
