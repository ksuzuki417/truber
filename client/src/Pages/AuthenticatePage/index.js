import React from "react";
import { useHistory } from "react-router-dom";




function AuthPage() {
  
    const history = useHistory();
    const navigateTruck = () => history.push("/truckInfo");
    const navigateClient = () => history.push("/client");

        
        return (
    <div>
        <h1>What do you want to do?</h1>
        
            <input type="radio" className="btn-check" ></input>
                <label className="btn btn-outline-primary" onClick={navigateTruck} id="hasTruck"for="btnradio2">Supply Truck</label>
            <input type="radio" className="btn-check"></input>
                <label className="btn btn-outline-primary"  onClick={navigateClient}  id="needsTruck" for="btnradio2">Truck Request</label> 

     </div>
        )
}

export default AuthPage;