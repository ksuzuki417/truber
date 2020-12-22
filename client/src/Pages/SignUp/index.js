import React from "react";
//import "../SignUp/style.css";
import {SubmitBtn} from "../../components/Buttons";
import InputArea from "../../components/Input";


function handleSubmitChange() {

}

function Signup(){
    return (
        <div className="container">
            <header>TrUber Sign Up</header>
        <p>First Name:</p>
        <InputArea placeHolder="First Name"/>
        <p>Last Name:</p>
        <InputArea placeHolder="Last Name"/>
        <p>Email:</p>
        <InputArea placeHolder="Email"/>
        <p>Password:</p>
        <InputArea placeHolder="Password"/>
        <br></br>
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" ></input>
        <label className="btn btn-outline-primary" id="hasTruck"for="btnradio2">Have Truck</label>
        <input type="radio" className="btn-check"></input>
        <label className="btn btn-outline-primary" id="needsTruck" for="btnradio2">Needs Truck</label>
        </div>
        <br></br>
        <SubmitBtn onChange={handleSubmitChange}/>

        </div>
    )
}

export default Signup;