const router = require("express").Router();
const trucksController = require ("../controllers/trucksController");

router.route("/trucks")
.get(trucksController.findAll)


module.exports = router;