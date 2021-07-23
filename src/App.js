import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import {Cakedetails} from './component/Cakedetails';
import Login from './component/Login';
import Home from './component/Home';
import Cake from './component/Cake';
import Signup from './component/Signup';
import Search from './component/Search';
import Pagenotfound from './component/Pagenotfound';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch}  from 'react-router-dom';
import {useState} from 'react'


function App() {
  var [isuserloggedin,setUserlogin] = useState(localStorage.token?true:false);
  function loggedin(){
    setUserlogin(true);
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar isuserloggedin = {isuserloggedin}/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login"><Login loggedin={loggedin}/></Route>
        <Route exact path="/cakdetails" component={Cakedetails}/>
        <Route exact path="/cake/:cakeid" component={Cakedetails}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/search' component={Search}/>
        <Route exact path='/**' component={Pagenotfound}/>
        </Switch>
      </BrowserRouter>

   
    </div>
  );
}

export default App;
