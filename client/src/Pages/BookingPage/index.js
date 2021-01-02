import React, { Component } from 'react';
import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper"
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
	width: '50%',
	height: '50%',
};

export class MapContainer extends Component {
  render() {
    return (
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
				<div className="form-group">
		<label for="inputAddress">Starting Location:</label>
		<input type="search" className="form-control" id="address-input" placeholder="1234 Main St City, ST 56789"/>
	</div>
	<div className="form-row">
		<div className="form-group col-md-6">
			<label for="inputCity">Destination Location:</label>
			<input type="search" className="form-control" id="address-input" placeholder="6789 Park Ln City, ST 12345"/>
		</div>
	</div>
	<div>
	<Map google={this.props.google} zoom={14}>
		<Marker onClick={this.onMarkerClick}
		name={'Current location'} />
		 </Map>
	</div>
      
			<button type="button" className="btn btn-primary">Book Now</button>
				</div>
			</div>
		</div>
	</div>
	</Container>
	</Wrapper>
    );
  }
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAqPz3idSbe0wpPbcnCGWUv4Unj69V7LgQ"
})(MapContainer);
