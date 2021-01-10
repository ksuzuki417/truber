const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const passport = require("./config/passport");
const path = require("path");
require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({
  secret: process.env.SESSION_SECRET||"once upon a time",
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize());

app.use(passport.session());

mongoose.connect(
  process.env.MONGODB_URI,
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false }
) .then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

require("./models/user");
const apiRoutes = require("./routes/apiRoutes");
const port = process.env.PORT || 3001;
// Bodyparser middleware

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

  // Passport middleware
  app.use(passport.initialize());
  app.use("/api", apiRoutes);


  
app.listen(port, () => console.log(`Server up and running on port ${port} !`));