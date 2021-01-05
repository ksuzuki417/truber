const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const truberSchema = new Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
		},
		color: {
			type: String
		},
    rate: {
        type: Number,
        required: true
		},
	seats: {
		type: Number
	},
	payload: {
		type: String
	},
	location: {
		type: String,
		required: true
	},
	bed: {
		type: String
	}
});

const Truber = mongoose.model("Truber", truberSchema);

module.exports = Truber;