import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles/style.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from "../../components/Container/Container";

function AuthPage() {
	
  
    const history = useHistory();
    const navigateTruck = () => history.push("/truckInfo");
    const navigateClient = () => history.push("/client");

		
        return (
				<Wrapper>
					<Container>
					<div>
        <h1>What do you want to do?</h1>
        
            <input type="radio" className="btn-check" ></input>
                <label className="btn btn-outline-primary" onClick={navigateTruck} id="hasTruck"for="btnradio2">Supply Truck</label>
            <input type="radio" className="btn-check"></input>
                <label className="btn btn-outline-primary"  onClick={navigateClient}  id="needsTruck" for="btnradio2">Truck Request</label> 

     </div>
					</Container>

				</Wrapper>
		
    
	
        )
}

export default AuthPage;