import React, {Component} from 'react';
import axios from "axios";
import "../../styles/style.css"
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from "../../components/Container/Container";
import InputArea from '../../components/Input';

class Login extends Component{
  confimation (event) {
    event.preventDefault()
    const data = {
        'email': this.loginName.value,
        'password': this.loginPassword.value,
    }
    axios
    .post("/api/login/" + this.loginName.value, data)
    .then(function () {
        alert("Account created successfully");
        window.location.reload();
    })
    .catch(function () {
        alert("Could not creat account. Please try again");
    });
}
  render() {
    return (
			<Wrapper>
				<Container>
				<h2>Login</h2>
								<div class="card border-success mb-3 ">
  <div class="card-body">
	<form onSubmit= {this.confimation.bind(this)}>
		<div className="form-group">
			<label>Email:</label><br>
			</br>
                <InputArea ref = {node => this.loginName = node} type="text" className="SignUp" placeHolder="Email"/>
								<br></br>
								<label>Password:</label><br></br>
                <InputArea ref = {node => this.loginPassword = node} type="password" className="SignUp" placeHolder="Password"/>
								<br>
								</br>
								<input type="radio" className="btn-check"></input>
                <label className="btn btn-success">Login</label>
		</div>
        </form>
  </div>
</div>
				</Container>
			</Wrapper>  
    )
}
}

export default Login;
