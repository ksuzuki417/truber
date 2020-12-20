import React from "react";
import "../SignUp/style.css";


function Signup(){
    return (
        <div className="container">
            <header>TrUber Sign Up</header>
        <p>First Name:</p>
        <input type="text" class="form-control" placeholder="First Name"></input>
        <p>Last Name:</p>
        <input type="text" class="form-control" placeholder="Last Name"></input>
        <p>Email:</p>
        <input type="text" class="form-control" placeholder="Email"></input>
        <p>Password:</p>
        <input type="text" class="form-control" placeholder="Password"></input>
        <br></br>
        <input type="radio" class="btn-check"></input>
        <label class="btn btn-outline-primary" for="btnradio2">Have Truck</label>
        <input type="radio" class="btn-check"></input>
        <label class="btn btn-outline-primary" for="btnradio2">Needs Truck</label>
        <br></br>
        <button>Sign Up!</button>

        </div>
    )
}

export default Signup;