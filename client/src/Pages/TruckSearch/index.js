import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API"
import Container from "../../components/Container/Container";
import { Card, CardItem } from "../../components/TruckCard";

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
        <Container>
            <Card>
                {trucks.map(truck => {
                    return (
                        <CardItem>
                            <img src="..." className="card-img" alt="..."/>
                            <strong>Make:</strong> {truck.make}
                            <strong>Model:</strong> {truck.model}
                            <strong>Location:</strong> {truck.location}
                            <strong>Rate:</strong> {truck.rate}
                        </CardItem>
                    )
                })}
            </Card>


            <button onClick= {handleBookingclick} type="submit" class="btn btn-primary">Book This Truck!</button>
        </Container>
        
    )
    }

export default TruckCard;