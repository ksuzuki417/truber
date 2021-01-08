import React, { useEffect } from "react";
// import axios from "axios";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_POSTS, LOADING } from "../../utils/actions";

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
                    {state.trucks
                    .map(truck => (

                    
                    <li key={truck.make}>
                        <strong>Make:{truck.make}</strong> {props.make}
                    </li>
                    ))}
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
                <button onClick= {handleBookingclick} type="submit" className="btn btn-primary">Book This Truck!</button>
            </div>
        </div>
    )
}

export default TruckCard;