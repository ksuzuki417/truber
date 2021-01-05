import React, { Component } from "react";
//import "../SignUp/style.css";
import $ from "jquery";

import {SubmitBtn} from "../../components/Buttons";
import InputArea from "../../components/HPbuttons/Input";
import { useHistory } from "react-router-dom";

class SignUp extends Component {
    confirmation (event) {
        event.preventDefault()
        const data = {
            "email": this.loginEmail.value,
            "password": this.loginPassword.value,
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/confirmUser",
            data: data,
            crossDomain: true,
            success: function(result){
                console.log("result:", result)
            },
            error: function(err) {alert("invalid info")}
        })
    }

    render(){

        const history = useHistory();
        const navigateTruck = () => history.push("/truckInfo");
        const navigateClient = () => history.push("/client");

        return (
            <div className="container">
                <form onSubmit={this.confirmation.bind(this)} >
                    <header>TrUber Sign Up</header>
                <p>First Name:</p>
                    <input type="text" placeHolder="First Name"/>
                <p>Last Name:</p>
                    <input type="text" placeHolder="Last Name"/>
                <p>Email:</p>
                    <input type="text" placeHolder="Email" ref = {node => this.loginEmail = node}/>
                <p>Password:</p>
                    <input type="text" placeHolder="Password" ref = {node => this.loginPassword = node}/>

                </form>
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

}

export default SignUp;