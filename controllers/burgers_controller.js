var express = require("express");

var router = express.Router();

// Requiring our models
var db = require("../models");
var Sequelize = require('sequelize');
// Create all our routes and set up logic within those routes where required.

//load all the burgers upon GET request
router.get("/", function(req, res) {
    db.burger.findAll({}).then(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log("I am here", hbsObject);
        
        res.render("index", hbsObject);
    });
});

//add one burger upon POST request
router.post("/", function(req, res) {
    db.burger.create({
      name: req.body.name
      }).then(function(data) {
        res.redirect("/");
    });
});

//update the burger upon PUT request with an id
router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("here ee condition", condition);

    db.burger.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(function(data) {
            res.redirect("/");
        });
});

// Export routes for server.js to use.
module.exports = router;