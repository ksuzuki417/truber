// Dependencies
const bcrypt= require("bcryptjs");
const mongoose = require("mongoose");
//const { model } = require("./truber");
const Schema = mongoose.Schema;


    const userSchema = new Schema({
            name: { type: String, required: true},
            email: {type: String, required: true},
            password: {type: String, required: true},
    });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    userSchema.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
    userSchema.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    const Users = mongoose.model("User", userSchema)

    module.exports= Users;
