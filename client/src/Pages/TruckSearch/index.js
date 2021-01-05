import React from "react";
import "../TruckSearch/style.css";
import API from "../../utils/API";

function TruckCard(prop) {

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
                <button type="submit" class="btn btn-primary">Book This Truck!</button>
            </div>
        </div>
    )
}

export default TruckCard;