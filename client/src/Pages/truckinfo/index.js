import React from "react";
import { useHistory } from "react-router-dom";
import InputArea from "../../components/Input"

function TruckInfo() {

  const history = useHistory();
    const navigateBooking = () => history.push("/truckprofile");
   

  return (
   
    <div className="container">
                <header>Enter Your Truck Info!</header>

<input type= "submit" value= "pic of truck"/>
<input type= "submit" value= "pic of self"/>





            <p>Make</p>
                <InputArea type="text" placeHolder="Make?"/>
            <p>Model</p>
                <InputArea type="text" placeHolder="Model?"/>
            <p>Location</p>
                <InputArea type="text" placeHolder="Location?"/>
            <p>Rate</p>
                <InputArea type="text" placeHolder="Rate?"/>
            <p>Seats</p>
                <InputArea type="text" placeHolder="Number of Seats?"/>
            <p>Payload</p>
                <InputArea type="text" placeHolder="Payload?"/>
            <p>Bed</p>
                <InputArea type="text" placeHolder="Bed size?"/>

                <button onClick= {navigateBooking}>Submit!</button>

      </div>  

    );
  }

export default TruckInfo;
