let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/Truber", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let userSeed = [
    {
        name: "Kevin Serrano",
        email: "kserrano2784@yahoo.com",
        password:"",
        make: "Chevrolet",
        model: "Silverado 2500",
        color: "Charcoal Gray",
        rate: 20,
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
    db.user.deleteMany({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });