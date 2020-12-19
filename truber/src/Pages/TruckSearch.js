import React from "react";

function TruckCard(props) {
    return(
        <div className="card">
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
            </div>
        </div>
}