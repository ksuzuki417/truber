import React, {useState } from "react";
import "../../styles/style.css";
import axios from 'axios';
import InputArea from "../../components/Input";
import { useHistory } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from "../../components/Container/Container";

function Signup(){

    const history = useHistory();
    const navigateLoggedIn = () => history.push("/authenticated");
  

    const [email, setEmail] = useState("");
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [password, setPassword] = useState("");

    function submitForm() {
        if (email === "") {
            alert("Please fill the EMAIL field");
            return;
        }
        if (password === "") {
            alert("Please fill the PASSWORD field");
            return;
        }
        axios
            .post("/api/register", {
                email: email,
                name: fName + " " + lName,
                password: password,
            })
            .then(function () {
                alert("Account created successfully");
                window.location.reload();
            })
            .catch(function () {
                alert("Could not create account. Please try again");
            });
            navigateLoggedIn();
    }


    return (
			<Wrapper>
				<Container>
                <h2>Sign Up</h2>
								<div class="card border-success mb-3  ">
  <div class="card-body">
	<form>
		<div className="form-group">
			<label>First Name:</label><br></br>
		<InputArea onChange={(e) => setfName(e.target.value)} type="text" className="SignUp" placeHolder="First Name"/>
		<br></br>
		<label>Last Name:</label><br></br>
                <InputArea onChange={(e) => setlName(e.target.value)} type="text" className="SignUp" placeHolder="Last Name"/>
								<br></br>
								<label>Email:</label><br></br>
                <InputArea onChange={(e) => setEmail(e.target.value)} type="text" className="SignUp" placeHolder="Email"/>
								<br></br>
								<label>Password:</label><br></br>
                <InputArea onChange={(e) => setPassword(e.target.value)} type="password" className="SignUp" placeHolder="Password"/>
								<br>
								</br>
								<input type="radio" className="btn-check"></input>
                <label className="btn btn-success"  onClick={submitForm}  id="needsTruck" for="btnradio2">Register</label>
		</div>
        </form>
  </div>
</div>
				</Container>
			</Wrapper>
        
    )
}

export default Signup;