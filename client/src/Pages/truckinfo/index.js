import React from "react";
import { useHistory, Link } from "react-router-dom";
import './infostyle.css';


function TruckInfo() {

  const history = useHistory();
    const navigateBooking = () => history.push("/bookingPage");
   

  return (
    <body>
      <div id="container">
        <div id="header">
          <h1>Enter Your truck information!</h1>
        </div>
        <div id="info">
          <div id="content">
            <div className="card-body">
              <header className="card-title">Truck Information</header>
              <p class="card-text">Make:</p>
              <input
                type="text"
                class="form-control"
                placeholder="Ford,Chevy,Toyota..."
              ></input>
              <p>Model:</p>
              <input
                type="text"
                class="form-control"
                placeholder="Model of youre truck?"
              ></input>
              <br></br>
              <p>Color:</p>
              <input
                type="text"
                class="form-control"
                placeholder="Color of youre truck?"
              ></input>
              <p>Payload:</p>
              <input
                type="text"
                class="form-control"
                placeholder="How much can youre truck carry?"
              ></input>
              <p>Short bed, Normal, or Extended bed:</p>
              <input
                type="text"
                class="form-control"
                placeholder="What is the truck bed size?"
              ></input>
              <p>Number of avalible seats?</p>
              <input
                type="text"
                class="form-control"
                placeholder="How many seats in youre truck?"
              ></input>
            </div>
          </div>
        </div>
        <div id="availability">
          <p class="card-text">What is youre Rate?:</p>
          <input
            type="text"
            class="form-control"
            placeholder="how much?"
          ></input>
          <p>When are you avalible</p>
          <input
            type="text"
            class="form-control"
            placeholder="availability"
          ></input>
          <br></br>
          <p>Location:</p>
          <input
            type="text"
            class="form-control"
            placeholder="location/zip"
          ></input>
          <p>Upload a picture of youre truck:</p>
          <div class="custom-file">
				
				<input type="file" class="custom-file-input" id="customFile"/>
				</div>
          <button onClick= {navigateBooking}>Submit!</button>
        </div>
        <div id="info">
          <p>
            <strong>1.Any Current listings?</strong>
          </p>
          <p>
            <strong>2.Reviews from past rides?</strong>
          </p>
        </div>
        <div id="footer">
          <p>Thank you for submitting your truck here on TrUber!!!</p>
        </div>
      </div>
     
    </body>
  );
}

export default TruckInfo;
