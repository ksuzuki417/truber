import React from 'react';
import "./style.css";


function SignUp() {
	return (
            <div className="card">
                <div className="card-body">
                <header className="card-title">TrUber Sign UP</header>
                    <p class="card-text">First Name:</p>
                    <input type="text" class="form-control" placeholder="First Name"></input>
                    <p>Last Name:</p>
                    <input type="text" class="form-control" placeholder="Last Name"></input>
                    <br></br>
                    <p class="card-text">Email</p>
                    <input type="text" class="form-control" placeholder="Email"></input>
                    <br></br>
                    <p class="card-text">Password:</p>
                    <input type="text" class="form-control" placeholder="Password"></input>
                    <br></br>
                    <input type="radio" id="hasTruck" name="status" value="hasTruck"></input>
                    <label for="hasTruck">Needs Truck</label>
                    <br></br>
                    <input type="radio" id="needsTruck" name="status" value="hasTruck"></input>
                    <label for="hasTruck">Has Truck</label>
                    <br></br>
                    <button type="button" class="btn btn-success">Sign UP!</button>
            </div>
            </div>
    )
    }

export default SignUp;