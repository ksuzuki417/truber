import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import { Card } from "../../components/TruckCard";
import "../../styles/style.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from "../../components/Container/Container";

function TruckCard() {

    const [trucks, setTrucks] = useState([]);

    const history = useHistory();
    const handleBookingclick = () => history.push("/bookingPage");

    useEffect(() => {
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
			<Wrapper>
				<Container>
                {trucks.map(truck => {
                    return (            
                    <Card>
                            {<img src={truck.image} className="card-img" alt="..."/>}
                            <strong>Make:</strong> {truck.make}
                            <strong>Model:</strong> {truck.model}
                            <strong>Location:</strong> {truck.location}
                            <strong>Rate:</strong> {truck.rate}
														<button onClick= {handleBookingclick} type="button" class="btn btn-success">Book This Truck!</button>
										</Card>
                    )
                })}
        </Container>
			</Wrapper>
    )
    }

export default TruckCard;