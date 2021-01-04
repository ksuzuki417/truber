const User = require("../models/user");
const bodyParser = require("body-parser");

const chatCtrl = {
    authenticate(req, res, next) {
        User.findOne(
            {name: req.body.name},
            function(err, user) {
                if(err) throw err;
                if(user) {
                    user.comparePassword(req.body.password, function(err, isMatch) {
                        if(err) throw err;
                        res.json(user);
                    });
                }else {
                    res.status(404).send("Invalid login info")
                }
            });
    }
}

export default chatCtrl;