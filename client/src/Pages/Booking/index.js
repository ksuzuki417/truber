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
			<div>
      <AcceptBtn onClick={handleAcceptBtn}/>,
      <DeclineBtn onClick={handleDeclineBtn}/>
    </div>
			</Container>
		</Wrapper>
    
  );
}

export default RequestBooking;