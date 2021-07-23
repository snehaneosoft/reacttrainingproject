import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Component } from "react"
import {Link,withRouter} from "react-router-dom"

class Login extends Component{
  constructor(){
    super();
    this.state={
      name:"sneha"
    }
  }

user ={}

handleEmail = (event) =>{
  this.user.email = event.target.value
}

handlePassword = (event) => {
  this.user.password = event.target.value
}

login = (event) =>{
  event.preventDefault();
  let apiurl = "https://apifromashu.herokuapp.com/api/login";

  axios({
        method:"post",
        url:apiurl,
        data:this.user
    }).then((response) => {
        console.log('response from login',response);
    },(error) => {
        console.log('error',error);
    })
}


render(){
return(
    <div class="container">
    <div class="login-wrapper">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={this.handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={this.handlePassword}  class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={this.login}>Submit</button>

  <div class='signupdiv'>
      <Link to="/signup">New User? Signup Here</Link>
  </div>
</form>
</div>
</div>
)
}
}

// withrouter used to add component defined as a tag with props object which contains history,map,location
export default withRouter(Login)