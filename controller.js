var bodyParser = require("body-parser");
var fs = require('fs');
// var request = require('request');
// var data = {"name":"aaron"};

var urlencode = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index");
  });

  // app.get("/",function(req, res) {
  //   request.get('https://api.darksky.net/forecast/6d5254f8b0472605fde6c25c5207d6c8/37.8267,-122.4233', function(err, response, body) {
  //     if (!err && response.statusCode == 200) {
  //       var data = JSON.parse(body);
  //       console.log(data);
  //       res.render('index', data);
  //     }
  //   });
  // });

};
