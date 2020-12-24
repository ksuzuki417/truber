import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function TruckProfile() {
  // Setting our component's initial state
  const [trucks, setTrucks] = useState([])
  const [formObject, setFormObject] = useState({
    make: "",
    model: "",
		color: "",
		rate: "",
		seats: "",
		payload: "",
		location: "",
		bed: ""
  })

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.make && formObject.model && formObject.location && formObject.rate) {
      API.saveTruck({
        make: formObject.make,
				model: formObject.model,
				color: formObject.color,
				rate: formObject.rate,
				seats: formObject.seats,
				payload: formObject.payload,
				location: formObject.location,
				bed: formObject.bed
      })
        .then(() => setFormObject({
          make: "",
					model: "",
					color: "",
					rate: "",
					seats: "",
					payload: "",
					location: "",
					bed: ""
        }))
        .catch(err => console.log(err));
    }
  };

	return(
	<div className="card">
		<form>
			<div className="form-group">
				<label>Make:</label>
				<input type="text" className="form-control" id="make" onChange={handleInputChange} value={formObject.make}></input>
				</div>
			<div className="form-group">
				<label>Model:</label>
				<input type="text" className="form-control" id="model" onChange={handleInputChange} value={formObject.model}></input>
			</div>
			<div className="form-group">
				<label>Color:</label>
				<input type="text" className="form-control" id="color" onChange={handleInputChange} value={formObject.color}/>
			</div>
			<div>
			<label>Rate:</label>
			<div className="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">$</span>
				</div>
					<input type="text" id="rate"  onChange={handleInputChange} value={formObject.rate} class="form-control" aria-label="Amount (to the nearest dollar)"/>
						<div class="input-group-append">
							<span class="input-group-text">.00</span>
						</div>
			</div>
			</div>
			<div className="form-group">
				<label>Number of Seats:</label>
				<select className="form-control custom-select" id="seats" onChange={handleInputChange} value={formObject.seats}>
					<option selected disabled value="">Choose...</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5 or more</option>
				</select>
			</div>
			<div className="form-group">
				<label>Payload:</label>
				<input type="text" className="form-control" id="payload" onChange={handleInputChange} value={formObject.payload} />
			</div>
			<div class="form-group">
				<label>Location:</label>
				<input type="text" className="form-control" id="location" onChange={handleInputChange} value={formObject.location}></input>
			</div>
			<div className="form-check form-check-inline">
				<input className="form-check-input" type="checkbox" id="longbed" value="option1"/>
				<label className="form-check-label" for="inlineCheckbox1">Long Bed</label>
			</div>
			<div className="form-check form-check-inline">
				<input className="form-check-input" type="checkbox" id="shortbed" value="option2"/>
				<label className="form-check-label" for="inlineCheckbox2">Short Bed</label>
			</div>
			<div class="custom-file">
				<label>Upload Image:</label>
				<input type="file" class="custom-file-input" id="customFile"/>
				</div>
			<button type="submit" class="btn btn-primary" onClick={handleFormSubmit}>Post Listing</button>
		</form>
</div>
    )
}

export default TruckProfile;