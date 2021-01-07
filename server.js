const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Truber',
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

  // Use apiRoutes
app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


  // Passport middleware
  app.use(passport.initialize());
  // Passport config
  //require("./config/passport")(passport);
  // Routes
  app.use("/api/users", users);



  // .then(() => console.log("MongoDB successfully connected"))
  // .catch(err => console.log(err));

  
app.listen(port, () => console.log(`Server up and running on port ${port} !`));