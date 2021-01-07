import React from "react";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";

function TruckCard(props) {

    const history = useHistory();
    const handleBookingclick = () => history.push("/bookingPage");
    

=======
import "../TruckSearch/style.css";

function TruckCard(prop) {

>>>>>>> 2a85f8d0e44b7c9a003ac993b03d84462ca7725d
    return(
        <div className="card" id="selector">
            <div className="img-container">
                <img alt={prop.name} src={prop.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Make:</strong> {prop.make}
                    </li>
                    <li>
                        <strong>Model:</strong> {prop.model}
                    </li>
                    <li>
                        <strong>Location:</strong> {prop.location}
                    </li>
                    <li>
                        <strong>Rate:</strong> {prop.rate}
                    </li>
                </ul>
                <button onClick= {handleBookingclick} type="submit" class="btn btn-primary">Book This Truck!</button>
            </div>
        </div>
    )
}

export default TruckCard;