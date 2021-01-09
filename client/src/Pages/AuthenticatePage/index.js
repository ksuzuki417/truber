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
        <h2>What do you want to do?</h2>
				<div class="card border-success mb-3">
				<div class="card-body text-center">
				<button type="button" class="btn btn-success" id="hasTruck" onClick= {navigateTruck}>Supply Truck</button>
				<button type="button" class="btn btn-success" id="needsTruck" onClick= {navigateClient}>Request Truck</button>
				</div>
				</div>
  
        
					</Container>

				</Wrapper>
		
    
	
        )
}

export default AuthPage;