import React from 'react';
import "./style.css";


function Login() {
    return (
     
            <div className="card">
                <div className="card-body">
                    <header className="card-title">TrUber Log In</header>
                    <p class="card-text">Email:</p>
                    <input type="text" class="form-control" placeholder="Email"></input>
                    <p>Password:</p>
                    <input type="text" class="form-control" placeholder="Password"></input>
                    <br></br>
                    <button>Login!</button>

                </div>
            </div>
      
    )
}

export default Login;