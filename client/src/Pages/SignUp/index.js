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
        <input type="radio" class="btn-check"></input>
        <label class="btn btn-outline-primary" for="btnradio2">Have Truck</label>
        <input type="radio" class="btn-check"></input>
        <label class="btn btn-outline-primary" for="btnradio2">Needs Truck</label>
        <br></br>
        <SubmitBtn onChange={handleSubmitChange}/>

        </div>
    )
}

export default Signup;