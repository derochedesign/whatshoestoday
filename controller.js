var bodyParser = require("body-parser");
var fs = require('fs');

var urlencode = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index", {project:"home"});
  });

};
