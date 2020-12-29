import React from "react";
//import "../SignUp/style.css";

import {SubmitBtn} from "../../components/Buttons";
import InputArea from "../../components/HPbuttons/Input";
import { useHistory } from "react-router-dom";





function Signup(){

    const history = useHistory();
    const navigateTruck = () => history.push("/truckInfo");
    const navigateClient = () => history.push("/client");

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
                <label className="btn btn-outline-primary" onClick={navigateTruck} id="hasTruck"for="btnradio2">Have Truck</label>
            <input type="radio" className="btn-check"></input>
                <label className="btn btn-outline-primary"  onClick={navigateClient}  id="needsTruck" for="btnradio2">Needs Truck</label>
            </div>
        </div>
    )
}

export default Signup;