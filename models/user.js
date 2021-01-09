// Dependencies
const bcrypt= require("bcryptjs");
const mongoose = require("mongoose");
const SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;
    const userSchema = new Schema({
            name: { type: String},
            email: {type: String, required: false, unique: true, trim: true, index: true},
            password: {type: String},
            owner: {type: Boolean},
            client: {type: Boolean},
            truber: [{
              type: Schema.Types.ObjectId, 
              ref: "Truber"
            }]
    });
  //Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    userSchema.pre("save", function(next) {
      const user = this;
      if (!user.isModified("password")) return next();
      bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash){
          if(err) return next(err);
          user.password = hash;
          next();
        });
      });
    });
 
    userSchema.methods.comparePassword = function(password){
      return bcrypt.compare(password,this.password)
    }

   const User = mongoose.model("User", userSchema); 
    module.exports = User
