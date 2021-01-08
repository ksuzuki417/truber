const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const truckSchema = new Schema({
    make: {type: String,required: true},
    model: {type: String,required: true},
	color: {type: String},
    rate: {type: Number,required: true},
	seats: {type: Number},
	payload: {type: String},
	startingLocation: {type: String,required: true},
	destinationLocation: {type: String,required: true},
	bed: {type: String}
});

const Truck = mongoose.model("Truber", truckSchema);

module.exports = Truck;