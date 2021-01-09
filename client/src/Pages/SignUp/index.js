import React, {useState } from "react";
import "../SignUp/style.css";
import axios from 'axios';
import InputArea from "../../components/Input";
import { useHistory } from "react-router-dom";

function Signup(){

    const history = useHistory();
    const navigateLoggedIn = () => history.push("/authenticated");
  

    const [email, setEmail] = useState("");
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [password, setPassword] = useState("");

    function submitForm() {
        if (email === "") {
            alert("Please fill the email field");
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
                alert("Could not creat account. Please try again");
            });
            navigateLoggedIn();
    }


    return (
        <div className="container">
                <h1>Sign Up</h1>
            {/* <label for="fname">First Name:</label><br></br> */}
                <InputArea onChange={(e) => setfName(e.target.value)} type="text" className="SignUp" placeHolder="First Name"/>
                {/* <label for="lname">Last Name:</label><br></br> */}
                <InputArea onChange={(e) => setlName(e.target.value)} type="text" className="SignUp" placeHolder="Last Name"/><br></br>
                {/* <label for="fname">Email:</label><br></br> */}
                <InputArea onChange={(e) => setEmail(e.target.value)} type="text" className="SignUp" placeHolder="Email"/><br></br>
                {/* <label for="fname">Password:</label><br></br> */}
                <InputArea onChange={(e) => setPassword(e.target.value)} type="password" className="SignUp" placeHolder="Password"/>
            <br></br>
            <input type="radio" className="btn-check"></input>
                <label className="btn btn-outline-primary"  onClick={submitForm}  id="needsTruck" for="btnradio2">Register</label>
        </div>
    )
}

export default Signup;