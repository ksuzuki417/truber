import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import InputArea from "../../components/Input";
import axios from 'axios';
import "../../styles/style.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from "../../components/Container/Container";

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
		<Wrapper>
			<Container>
                <h2>Enter Your Truck Info:</h2>
								<div class="card border-success mb-3">
								<div class="card-body">
								<form>
								<div className="form-group">
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
                <InputArea onChange={(e) => setBed(e.target.value)} type="text" placeholder="Bed size?"/>

                <button type="button" class="btn btn-success" onClick= {submitTruck}>Submit!</button>
								</div>
								</form>
								</div>
								</div>
 
	
		

            
			</Container>
		</Wrapper>
    );
  }

export default TruckInfo;
