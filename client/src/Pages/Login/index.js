import React, {Component} from 'react';
import axios from "axios";
//import "./style.css";
//import Input from "../../components/Input";


class Login extends Component{
    
confirmation (event) {
    event.preventDefault()
    const data = {
        'name': this.loginName.value,
        'password': this.loginPassword.value,
    }
  axios({
        type: "POST",
        url: "http://localhost:3000/confirmUser",
        data: data,
        crossDomain: true,
        success: function(result){
            console.log("result", result)
        },
        error: function (err) {alert("invalid info")}
    })
}
    render() {
    return (
            <div className="card">
                <div className="card-body">
                    <header className="card-title">TrUber Log In</header>
                    <form onSubmit= {this.confirmation.bind(this)}>
                    <p className="card-text">Email:</p>
                    <input type="text" ref = {node => this.loginName = node} className="form-control" placeholder="Email"></input>
                    <p>Password:</p>
                    <input type="text" ref = {node => this.loginPassword = node} className="form-control" placeholder="Password"></input>
                    <input type= "submit" value= "Login!"/>
                    <br></br>
                    </form>
                    

                </div>
            </div>
    )
}
}

export default Login;
