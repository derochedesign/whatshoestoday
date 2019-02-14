var bodyParser = require("body-parser");
var fs = require('fs');
// var request = require('request');
// var data = {"name":"aaron"};

var urlencode = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index");
  });

};
