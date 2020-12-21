import React from "react";
//import "../Homepage/style.css";
import { useHistory } from "react-router-dom";
import { SignUpBtn, LoginBtn } from "../../components/HPbuttons";


function Homepage() {

        const history = useHistory();
        const navigateSignup = () => history.push("/signup");
        const navigateLogin= () => history.push("/login");
        

    function handleLoginBtn() {

    };


        return (
    <div>
        <h1>Welcome to TrUber!</h1>
        <br></br>
        <br></br>
        <SignUpBtn onClick={navigateSignup}/>
        <LoginBtn onClick={navigateLogin}/>
    </div>
        )
}

export default Homepage;