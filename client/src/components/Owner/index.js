import React from "react";

function TruckProfile() {
	return(
	<div className="card">
		<form>
			<button type="submit" class="btn btn-primary">View Booking Requests</button>
			<div className="form-group">
				<label>Make:</label>
				<input type="text" className="form-control" id="make"/>
				</div>
			<div className="form-group">
				<label>Model:</label>
				<input type="text" className="form-control" id="model"/>
			</div>
			<div className="form-group">
				<label>Color:</label>
				<input type="text" className="form-control" id="color"/>
			</div>
			<div>
			<label>Rate:</label>
			<div className="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">$</span>
				</div>
					<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
						<div class="input-group-append">
							<span class="input-group-text">.00</span>
						</div>
			</div>
			</div>
			<div className="form-group">
				<label>Number of Seats:</label>
				<select className="form-control custom-select" id="exampleFormControlSelect1">
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
				<input type="text" className="form-control" id="payload"/>
			</div>
			<div class="form-group">
				<label>Location Zipcode:</label>
				<input type="text" className="form-control" id="zipcode"/>
			</div>
			<div className="form-check form-check-inline">
				<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
				<label className="form-check-label" for="inlineCheckbox1">Long Bed</label>
			</div>
			<div className="form-check form-check-inline">
				<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
				<label className="form-check-label" for="inlineCheckbox2">Short Bed</label>
			</div>
			<div class="custom-file">
				<label>Upload Image:</label>
				<input type="file" class="custom-file-input" id="customFile"/>
				</div>
			<button type="submit" class="btn btn-primary">Post Listing</button>
		</form>
</div>
    )
}

export default TruckProfile;