import React from "react";
import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper"
import {Client} from "@googlemaps/google-maps-services-js";

var places = require('places.js');
var placesAutocomplete = places({
		appId: 'plFCXLAE3ZG5',
		apiKey: '5095b4ad442d5c7294786a6e13299475',
		container: document.querySelector('#address-input')
});

const client = new Client({});

client
  .elevation({
    params: {
      locations: [{ lat: 45, lng: -110 }],
      key: "asdf",
    },
    timeout: 1000, // milliseconds
  })
  .then((r) => {
    console.log(r.data.results[0].elevation);
  })
  .catch((e) => {
    console.log(e.response.data.error_message);
  });

function BookTruck(props) {
	return(
		<Wrapper>
			<Container>
			<div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-2">
      <img src="..." className="card-img" alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title">Owner Info:</h5>
        <p className="card-text">Make:</p>
        <p className="card-text">Model:</p>
				<p className="card-text">Color:</p>
				<p className="card-text">Payload:</p>
				<p className="card-text">Bed Type:</p>
				<p className="card-text">Number of Seats:</p>
				<p className="card-text">Rate:</p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title">User Info:</h5>
				<div class="form-group">
    <label for="inputAddress">Starting Location:</label>
    <input type="search" class="form-control" id="address-input" placeholder="1234 Main St City, ST 56789"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Destination Location:</label>
      <input type="search" class="form-control" id="address-input" placeholder="1234 Main St City, ST 56789"/>
    </div>
  </div>
<h1>Map will go here </h1>
      </div>
    </div>
  </div>
</div>
</Container>
</Wrapper>
	)
}

export default BookTruck;