import React from "react";
import {AcceptBtn, DeclineBtn} from "../../components/Buttons";
import "../../style.css"

function RequestBooking() {
	function handleAcceptBtn () {
	
	}
	
	function handleDeclineBtn (){

		}
		
	return (
    <div>
      <AcceptBtn onClick={handleAcceptBtn}/>,
      <DeclineBtn onClick={handleDeclineBtn}/>
    </div>
  );
}

export default RequestBooking;