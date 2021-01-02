import React, { useState, useEffect } from "react";
import "../TruckSearch/style.css";
import API from "../../utils/API";

function TruckCard() {
    const [trucks, setTrucks] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() =>{
        loadTrucks()
    }, [])

    function loadTrucks() {
        API.getTrucks()
        .then(res =>
            setTrucks(res.data)
            )
        .catch(err => console.log(err));    
    };

    return(
        <div className="card" id="selector">
            
            {trucks.map(truck => (
                <div>
                <div className="img-container">
                    <img alt={truck.name} src={truck.image} />
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <strong>Make:</strong> {truck.make}
                        </li>
                        <li>
                            <strong>Model:</strong> {truck.model}
                        </li>
                        <li>
                            <strong>Location:</strong> {truck.location}
                        </li>
                        <li>
                            <strong>Rate:</strong> {truck.rate}
                        </li>
                    </ul>
                    <button type="submit" class="btn btn-primary">Book This Truck!</button>
                </div>
                </div>
            ))}

        </div>
    )
}

export default TruckCard;