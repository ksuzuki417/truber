const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trucksSchema = new Schema({
    make: {type: String,required: true},
    model: {type: String,required: true},
	color: {type: String},
    rate: {type: Number,required: true},
	seats: {type: Number},
	payload: {type: String},
	startingLocation: {type: String,required: true},
	destinationLocation: {type: String},
	bed: {type: String}
});

const Trucks = mongoose.model("trucks", trucksSchema);

module.exports = Trucks;