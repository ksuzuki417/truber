import React, { useEffect } from "react";
import "../TruckSearch/style.css";
import API from "../../utils/API";

function TruckCard(props) {

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
                <button type="submit" class="btn btn-primary">Book This Truck!</button>
            </div>
        </div>
    )
}

export default TruckCard;