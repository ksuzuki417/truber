const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Truber"
);

const truberSeed = [
    {
        name: "Keita",
        email: "ksuzuki417@gmail.com",
        password: "123456",
        make: "Toyota",
        model: "Tundra",
        color: "Brown",
        rate: 20,
        seats: "Double Cab",
        payload: 1520,
        location: "Northeast SA",
        bed: "",
        owner: true,
        client: false
    },
    {
        name: "kevin",
        email: "kevin@gmail.com",
        password: "123456",
        make: "Toyota",
        model: "Tacoma",
        color: "Black",
        rate: 18,
        seats: "Double Cab",
        payload: 1120,
        location: "Northeast SA",
        bed: "",
        owner: true,
        client: false
    },
    {
        name: "Kevin",
        email: "kserrano2784@yahoo.com",
        password: "123456789",
        owner: false,
        client: true    
    }];

    db.Truber
        .remove({})
        .then(() => db.Truber.collection.insertMany(truberSeed))
        .then(data => {
            console.error(err);
            process.exit(1);
        });
