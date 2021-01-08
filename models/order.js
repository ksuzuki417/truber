const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
		startingLocation: {
			type: String,
			required: true
		},
		destinationLocation: {
			type: String,
			required: true
		},
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;