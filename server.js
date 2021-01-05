const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");

mongoose
  .connect(
    'mongodb://localhost/Truber',
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false }
  )

  require("./models/user");
const users = require("./routes/users");
const port = process.env.PORT || 3001;
// Bodyparser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// DB Config
//const db = require("./config/keys").mongoURI;
// Connect to MongoDB

// Passport middleware
app.use(passport.initialize());
// Passport config
//require("./config/passport")(passport);
// Routes
app.use("/api/users", users);



  // .then(() => console.log("MongoDB successfully connected"))
  // .catch(err => console.log(err));

  
app.listen(port, () => console.log(`Server up and running on port ${port} !`));