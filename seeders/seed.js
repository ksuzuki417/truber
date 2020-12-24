let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/Truber", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let userSeed = [
    {
        name: {
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
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
    }];
