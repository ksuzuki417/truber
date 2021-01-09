import React, {Component} from 'react';
//import axios from "axios";
import { useHistory } from "react-router-dom";
//import "./style.css";


class Login extends Component{

  
    
confimation (event) {
    // event.preventDefault()
    // const data = {
    //     'email': this.loginName.value,
    //     'password': this.loginPassword.value,
    // }
    // axios
    // .post("/api/login/" + this.loginName.value, data)
    // .then(function () {
    //     alert("Account created successfully");
    //     window.location.reload();
    // })
    // .catch(function () {
    //     alert("Could not creat account. Please try again");
    //     navigateLoggedIn()
    // });
    const history = useHistory();
    const navigateLoggedIn = () => history.push("/authenticated");
    navigateLoggedIn();
}
    render() {
    return (
            <div className="card">
                <div className="card-body">
                    <header className="card-title">TrUber Log In</header>
                    <form onSubmit= {this.confimation.bind(this)}>
                    <p className="card-text">Email:</p>
                    <input type="text" ref = {node => this.loginName = node} class="form-control" placeholder="Email"></input>
                    <p>Password:</p>
                    <input type="password" ref = {node => this.loginPassword = node} class="form-control" placeholder="Password"></input>
                    <input type= "submit" value= "Login!"/>
                    <br></br>
                   </form> 
                    

                </div>
            </div>
    )
}
}

export default Login;
