const fetch = require('node-fetch');

module.exports = (app) => {

  app.get('/get-weather', (req, res) => {
  	//build api URL with user zip
  	const baseUrl = 'https://api.darksky.net/forecast/';
    const appKey = "6d5254f8b0472605fde6c25c5207d6c8";
    var lat = "42.3601";
    var long = "-71.0589";

  	// const userLocation = (url1, url2, zipcode) => {
  	// 	let newUrl = url1 + zipcode + url2;
  	// 	return newUrl;
  	// };
  	// const apiUrl = userLocation(baseUrl, apiId, zipcode);
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
}
