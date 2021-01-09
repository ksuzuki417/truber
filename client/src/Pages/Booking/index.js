import React from "react";
import {AcceptBtn, DeclineBtn} from "../../components/Buttons";
import "../../styles/style.css"
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from "../../components/Container/Container";

function RequestBooking() {
	function handleAcceptBtn () {
	
	}
	
	function handleDeclineBtn (){

		}
		
	return (
		<Wrapper>
			<Container>
				<h2>Booking Requests:</h2>
					<div class="card border-success mb-3">
					<div class="card-body text-center">
					<AcceptBtn onClick={handleAcceptBtn}/>
					<DeclineBtn onClick={handleDeclineBtn}/>
					</div>
					</div>
			</Container>
		</Wrapper>
    
  );
}

export default RequestBooking;