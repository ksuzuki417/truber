import React from "react";
import { useHistory, Link } from "react-router-dom";
import InputArea from "../../components/Input";

function TruckInfo() {

  const history = useHistory();
    const navigateBooking = () => history.push("/bookingPage");
   

  return (
   
    <div className="container">
                <header>Enter Youre Truck Info!</header>

<input type= "submit" value= "pic of truck"/>
<input type= "submit" value= "pic of self"/>





            <p>Location</p>
                <InputArea type="text" placeHolder="Location?"/>
            <p>Make</p>
                <InputArea type="text" placeHolder="Make?"/>
            <p>Model</p>
                <InputArea type="text" placeHolder="Model?"/>
            <p>Bed size</p>
                <InputArea type="text" placeHolder="Bed size?"/>
            <p>Payload</p>
                <InputArea type="text" placeHolder="Payload?"/>
            <p>Price</p>
                <InputArea type="text" placeHolder="Rate?"/>
            <p>Avaliablity</p>
                <InputArea type="text" placeHolder="When would you be contacted?"/>

                <button onClick= {navigateBooking}>Submit!</button>

      </div>  

    );
  }

export default TruckInfo;
