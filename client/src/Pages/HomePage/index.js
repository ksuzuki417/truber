import React from "react";
<<<<<<< HEAD
import "./home.css";
import { useHistory } from "react-router-dom";
import { SignUpBtn, LoginBtn } from "../../components/HPbuttons";
=======
//import "../Homepage/style.css";

>>>>>>> e1d675c89acb6c058009fbbf87a553521e1ee957


function Homepage() {

<<<<<<< HEAD
  const history = useHistory();
  const navigateSignup = () => history.push("/signup");
  const navigateLogin= () => history.push("/login");
  
  return (
<div>
  <h1>Welcome to TrUber!</h1>
  <br></br>
  <br></br>
  <SignUpBtn onClick={navigateSignup}/>
  <LoginBtn onClick={navigateLogin}/>
</div>
  )
=======
        
        return (
    <div>
        <h1>Welcome to TrUber!</h1>
     </div>
        )
>>>>>>> e1d675c89acb6c058009fbbf87a553521e1ee957
}

export default Homepage;