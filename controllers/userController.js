const db = require("../models");


module.exports = {
    create: (req,res) => {
        console.log(req.body)
        db.User
        .create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err))
    }
}