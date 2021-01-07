import React from "react";
import { useHistory } from "react-router-dom";

function TruckInfo() {

  const history = useHistory();
    const navigateBooking = () => history.push("/truckprofile");
   

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
              <p className="card-text">Make:</p>
              <input
                type="text"
                className="form-control"
                placeholder="Ford,Chevy,Toyota..."
              ></input>
              <p>Model:</p>
              <input
                type="text"
                className="form-control"
                placeholder="Model of your truck?"
              ></input>
              <br></br>
              <p>Color:</p>
              <input
                type="text"
                className="form-control"
                placeholder="Color of your truck?"
              ></input>
              <p>Payload:</p>
              <input
                type="text"
                className="form-control"
                placeholder="How much can your truck carry?"
              ></input>
              <p>Short bed, Normal, or Extended bed:</p>
              <input
                type="text"
                className="form-control"
                placeholder="What is the truck bed size?"
              ></input>
              <p>Number of available seats?</p>
              <input
                type="text"
                className="form-control"
                placeholder="How many seats in your truck?"
              ></input>
            </div>
          </div>
        </div>
        <div id="availability">
          <p className="card-text">What is your Rate?:</p>
          <input
            type="text"
            className="form-control"
            placeholder="how much?"
          ></input>
          <p>When are you available</p>
          <input
            type="text"
            className="form-control"
            placeholder="availability"
          ></input>
          <br></br>
          <p>Location:</p>
          <input
            type="text"
            className="form-control"
            placeholder="location/zip"
          ></input>
          <p>Upload a picture of your truck:</p>
          <input type="img" class="form-control" placeholder="post pic"></input>
          <br></br>
          <button onClick= {navigateBooking}>Submit!</button>
        </div>
        <div id="extra">
          <p>
            <strong>3.Any Current listings?</strong>
          </p>
          <p>
            <strong>3.Reviews from past rides?</strong>
          </p>
        </div>
        <div id="footer">
          <p>Thank you for submitting your truck here on TrUber!!!</p>
        </div>
      </div>
      <script type="text/javascript">
        AddFillerLink("content", "navigation", "extra")
      </script>
    </body>
  );
}

export default TruckInfo;
