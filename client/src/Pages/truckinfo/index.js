import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import InputArea from "../../components/Input";
import axios from 'axios';

function TruckInfo() {

  const history = useHistory();
    const navigateBooking = () => history.push("/truckprofile");
  
    const [Make, setMake] = useState("");
    const [Model, setModel] = useState("");
    const [Location, setLocation] = useState("");
    const [Rate, setRate] = useState("");
    const [Seats, setSeats] = useState("");
    const [Payload, setPayload] = useState("");
    const [Bed, setBed] = useState("");

    function submitTruck() {
       
        axios
            .post("/api/registerTruber/", {
                make: Make,
                model: Model,
                startingLocation: Location,
                rate: Rate,
                seats: Seats,
                payload: Payload,
                bed: Bed
            })
            .then(function () {
                alert("Truck posted successfully!");
                window.location.reload();
            })
            .catch(function () {
                alert("Could not post truck. Please try again");
            });
            navigateBooking();
    }

  return (
   
    <div className="container">
                <header>Enter Youre Truck Info!</header>

<input type= "submit" value= "pic of truck"/>
<input type= "submit" value= "pic of self"/><br></br><br></br>





            <label>Make:</label><br></br>
                <InputArea onChange={(e) => setMake(e.target.value)} type="text" placeholder="Make?" /><br></br>
            <label>Model:</label><br></br>
                <InputArea onChange={(e) => setModel(e.target.value)} type="text" placeholder="Model?"/><br></br>
            <label>Location:</label><br></br>
                <InputArea onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Location?"/><br></br>
            <label>Rate per Hour:</label><br></br>
                <InputArea onChange={(e) => setRate(e.target.value)} type="text" placeholder="Rate?"/><br></br>
            <label>Seats:</label><br></br>
                <InputArea onChange={(e) => setSeats(e.target.value)} type="text" placeholder="Number of Seats?"/><br></br>
            <label>Weight Capacity:</label><br></br>
                <InputArea onChange={(e) => setPayload(e.target.value)} type="text" placeholder="Payload?"/><br></br>
            <label>Bed:</label><br></br>
                <InputArea onChange={(e) => setBed(e.target.value)} type="text" placeholder="Bed size?"/><br></br><br></br>

                <button onClick= {submitTruck}>Submit!</button>

      </div>  

    );
  }

export default TruckInfo;
