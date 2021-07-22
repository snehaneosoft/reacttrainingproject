import logo from './logo.svg';
import './App.css';
import{Navbar} from './component/Navbar';
import {Cakedetails} from './component/Cakedetails';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
      <Cakedetails></Cakedetails>
   
    </div>
  );
}

export default App;
