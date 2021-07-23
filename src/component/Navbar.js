import { useState } from 'react';
import {Link,withRouter} from 'react-router-dom'

function Navbar(props){
    var [title,setTitle] = useState("Cake gallary");
    var [searchtext,setSearchtext] = useState(undefined)

    
    function search(e){
      e.preventDefault();

      if(searchtext){
      var url = '/search?q='+searchtext;
      props.history.push(url)
    }
  }
  function getsearchtext(event){
    
    setSearchtext(event.target.value);
  }
    return (
        
        <nav class="navbar navbar-expand-lg navbar-light navbar-dark bg-dark">
 <Link to="/" class="navbar-brand">{title}</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <form style={{marginLeft:"10em"}} class="form-inline my-2 my-lg-0">
    <input onChange={getsearchtext}  id="searchinputfield" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" aria-label="Search"/>
   <button onClick={search} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
      
      
    </ul>
    {props.isuserloggedin==false && <form class="form-inline my-2 my-lg-0">
      
      <Link to = "/login"><button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Login</button></Link>
    </form>}

    {props.isuserloggedin==true && <form class="form-inline my-2 my-lg-0">
          <button  class="btn btn-primary my-2 my-sm-0" type="submit" style={{marginRight:"10px"}}>Logout</button>
          <button  class="btn btn-success my-2 my-sm-0" type="submit">Cart</button>

      </form>}
  </div>
 
</nav>
    )
}
 
export default Navbar = withRouter(Navbar)