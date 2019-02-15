const fetch = require('node-fetch');
var bodyParser = require("body-parser");

var urlencode = bodyParser.urlencoded({extended: false});
var position;

module.exports = (app) => {

  app.post('/search', urlencode, (req, res) => {
		position = req.body;
    res.redirect('/get-weather');

  });

  app.get('/get-weather', (req, res) => {
  	//build api URL with user zip
  	const baseUrl = 'https://api.darksky.net/forecast/';
    const appKey = "6d5254f8b0472605fde6c25c5207d6c8";
    var lat = "43.651588";
    var long = "-79.367270";
    lat = position.lat;
    long = position.long;

    apiUrl = "https://api.darksky.net/forecast/"+appKey+"/"+lat+","+long+"?units=si";

  	fetch(apiUrl)
  	.then(res => res.json())
  	.then(data => {
  		res.send({ data });
  	})
  	.catch(err => {
  		res.redirect('/error');
  	});

  });

  app.get('/get-history', (req, res) => {
    //build api URL with user zip
    const baseUrl = 'https://api.darksky.net/forecast/';
    const appKey = "6d5254f8b0472605fde6c25c5207d6c8";
    var lat = "43.651588";
    var long = "-79.367270";
    lat = position.lat;
    long = position.long;
    if (!Date.now) {
      Date.now = function() { return new Date().getTime(); }
    }
    var time = Math.round((new Date()).getTime() / 1000);

    apiUrl = "https://api.darksky.net/forecast/"+appKey+"/"+lat+","+long+","+time+"?units=si&exclude=flags,daily,alerts";

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.redirect('/error');
    });

  });
}
