import React from "react";
import { useHistory } from "react-router-dom";

function TruckCard(props) {

    const history = useHistory();
    const handleBookingclick = () => history.push("/bookingPage");
    

    return(
        <div className="card" id="selector">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Make:</strong> {props.make}
                    </li>
                    <li>
                        <strong>Model:</strong> {props.model}
                    </li>
                    <li>
                        <strong>Location:</strong> {props.location}
                    </li>
                    <li>
                        <strong>Rate:</strong> {props.rate}
                    </li>
                </ul>
                <button onClick= {handleBookingclick} type="submit" class="btn btn-primary">Book This Truck!</button>
            </div>
        </div>
    )
}

export default TruckCard;