const passport = require("../config/passport");
require("dotenv");
const express = require("express");
const router = express.Router();
const isAuthenticated = require("../config/isAuthenticated");
const userController = require("../controllers/userController");
const trucksController = require("../controllers/trucksController");

router.post("/login", passport.authenticate("local"), (req,res) => {
    res.json(req.user)
    console.log(isAuthenticated())
})

router.post("/logout", (req,res) => {
    req.logout()
    res.redirect("/")
})

router.route("/register")
.post(userController.create);

router.route("/registerTruber")
.post(trucksController.create);

router.route("/info")
.get(userController.findAll);


router
.route("/trucks")
.get(trucksController.findAll)


module.exports = router;