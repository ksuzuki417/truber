import React, {Component} from 'react';
//import "./style.css";
//import Input from "../../components/Input";


class Login extends Component{
confimation (event) {
    event.preventDefault()
    const data = {
        'name': this.loginName.value,
        'password': this.loginPassword.value,
    }
   .ajax({
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
                    <form onSubmit= {this.confimation.bind(this)}>
                    <p className="card-text">Email:</p>
                    <input type="text" ref = {node => this.loginName = node} class="form-control" placeholder="Email"></input>
                    <p>Password:</p>
                    <input type="text" ref = {node => this.loginPassword = node} class="form-control" placeholder="Password"></input>
                    <input type= "submit" value= "Login!"/>
                    <br></br>
                    </form>
                    

                </div>
            </div>
    )
}
}

export default Login;
