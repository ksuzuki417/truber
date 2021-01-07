const db = require("../models");


module.exports = {
    create: (req,res) => {
        console.log(req.body)
        db.User
        .create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err))
    },
    findAll: (req, res) => {
        db.User
          .find(req.body)
          .sort({ date: -1 })
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
      },
      registerTruber: (req,res) => {
          db.User
          .findById(req.params.id, function (err,user) {
              if(err) throw err 

              db.Truber
              .create(req.body, function (err, truberModelData) {
                  if(err) throw err

                  user.truber.push(truberModelData)
                  user.save();
              })
          }).then(data => res.json(data))
          .catch(err => res.status(422).json("error occured during truck registration" + err));
          
      }
}