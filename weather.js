const fetch = require('node-fetch');

module.exports = (app) => {

  app.get('/get-weather', (req, res) => {
  	//build api URL with user zip
  	const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  	const apiId = '&appid=<YOUR API KEY GOES HERE>&units=imperial';

  	// const userLocation = (url1, url2, zipcode) => {
  	// 	let newUrl = url1 + zipcode + url2;
  	// 	return newUrl;
  	// };
    //
  	// const apiUrl = userLocation(baseUrl, apiId, zipcode);
    apiUrl = "https://api.darksky.net/forecast/6d5254f8b0472605fde6c25c5207d6c8/43.6532,79.3832?units=si";

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
