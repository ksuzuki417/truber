// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcrypt");

mongoose.connect(MONGODB_URI);
mongoose.connection.once("open", () => {
  console.log("Connected with MONGODB");
});

let usersSchema = mongoose.Schema({
  name: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

usersSchema.pre("save", function(next) {
  let user = this;
  if (!user.isModified("password")) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err,salt) {
    if(err) return next(err);
    bcrypt.hash(user,password, salt, function(err, hash){
      if(err) return next(err);
      user.password = hash;
      next();
    });
  });
});
usersSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) return cb(err);
    cb(null, isMatch);
  });
};

    /*const userSchema = new Schema({
            name: { type: String, required: true},
            email: {type: String, required: true},
            password: {type: String, required: true},
            owner: {type: Boolean, required: true},
            client: {type: Boolean, required: true}
    });*/

   Users = mongoose.model("User", userSchema)

    module.exports= Users;
