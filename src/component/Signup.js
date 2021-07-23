import { render } from "@testing-library/react"
import axios from "axios"
import {Component, PureComponent} from "react"

class Signup extends Component{
    constructor(){
        super()
        // initialising the state
        this.state = {
            name:"Ashu",
            loading:0
        }
    }
    user ={}

handleEmail = (event) =>{
    this.user.email = event.target.value
}

handleName = (event) =>{
    this.user.name= event.target.value
  }

handlePassword = (event) => {
    this.user.password = event.target.value
}

signup = (event) =>{
  
  let apiurl = "https://apifromashu.herokuapp.com/api/register";

  axios({
        method:"post",
        url:apiurl,
        data:this.user
    }).then((response) => {
        console.log('response from signup',response);
    },(error) => {
        console.log('error',error);
    })
    event.preventDefault();
}

render(){
    return (
        <div class="login-wrapper">
            <form>
                <h1>Signup Here</h1>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input  onChange={this.handleName}  type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input  onChange={this.handleEmail} type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email" />
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={this.handlePassword}  type="password" class="form-control"  placeholder="Password" />
                </div>
                <div>
                <label className="errormessage"></label>
                <button style={{float:"right"}} onClick={this.signup} type="submit" class="btn btn-primary">Signup</button>
                </div>
                </form>

        </div>
    )
}
}

export default Signup