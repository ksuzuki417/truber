import React, { Component } from 'react';
import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper"
import StartingLocation from "../../components/PlacesInput";
import DestinationLocation from "../../components/PlacesInput2"
import { Map, GoogleApiWrapper } from 'google-maps-react'

const containerStyle = {  
  width: '75%',
  height: '75%'
};

class MapContainer extends Component {
    constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log("working")
    event.preventDefault();
    }
    
    render (){
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
                <h5 className="card-title">Owner Info:{this.props.owner}</h5>
                <p className="card-text">Make:{this.props.make}</p>
                <p className="card-text">Model:{this.props.model}</p>
                <p className="card-text">Color:{this.props.color}</p>
                <p className="card-text">Payload:{this.props.payload}</p>
                <p className="card-text">Bed Type:{this.props.bed}</p>
                <p className="card-text">Number of Seats:{this.props.seats}</p>
                <p className="card-text">Rate:{this.props.rate}</p>
            </div>
        </div>
    </div>
</div>
<div className="card mb-3">
    <div className="row no-gutters">
        <div className="col-md-6">
        <div className="card-body">
            <form onSubmit={this.handleSubmit}>
            <StartingLocation></StartingLocation>
<DestinationLocation></DestinationLocation>
<button type="submit" value="Submit" className="btn btn-primary">Get Directions</button>
            </form>
        </div>
        </div>
        </div>
        </div>
        <div>
        <Map 
    google={this.props.google} 
    zoom={14}
    containerStyle={containerStyle}
    initialCenter={{
        lat: 29.4260,
        lng: -98.4861
    }}>
    </Map>
    </div>
    </Container>
    </Wrapper>
    );
  }
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAqPz3idSbe0wpPbcnCGWUv4Unj69V7LgQ"
})(MapContainer);