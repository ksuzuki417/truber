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
    location: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    }

});

const Truber = mongoose.model("Truber", truberSchema);

module.exports = Truber;