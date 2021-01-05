import React from "react";
import "./home.css";
import { useHistory } from "react-router-dom";
import { SignUpBtn, LoginBtn } from "../../components/HPbuttons";


function Homepage() {


    const history = useHistory();
    const navigateSignup = () => history.push("/signup");
    const navigateLogin= () => history.push("/login");
    
    return (

<div class="row">
  <div class="col-sm-9">
    Welcome to TrUber!!
    <div class="row">
      <div class="col-xs-8 col-sm-6">
      <SignUpBtn onClick={navigateSignup}/>
      </div>
      <div class="col-xs-4 col-sm-6">
      <LoginBtn onClick={navigateLogin}/>
      </div>
    </div>
  </div>
</div>
 /*
 
        
  */ 
    )      
}

export default Homepage;