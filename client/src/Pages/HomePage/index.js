import React from "react";
//import "../Homepage/style.css";
import { useHistory } from "react-router-dom";
import { SignUpBtn, LoginBtn } from "../../components/HPbuttons";


function Homepage() {

        const history = useHistory();
        const navigateTo = () => history.push("/signup");
        

    function handleLoginBtn() {

    };


        return (
    <div>
        <h1>Welcome to TrUber!</h1>
        <br></br>
        <br></br>
        <SignUpBtn onClick={navigateTo}/>
        <LoginBtn onClick={handleLoginBtn}/>
    </div>
        )
}

export default Homepage;