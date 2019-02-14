// const appKey = "6d5254f8b0472605fde6c25c5207d6c8";
// var lat = "42.3601";
// var long = "-71.0589";

// $.getJSON("http://cors.io/?https://api.darksky.net/forecast/"+appKey+"/"+lat+","+long, function(data) {
//     console.log(data);
// });

var temp;
var dataSet;

fetch('/get-weather')
		.then(res => res.json())
    .then(data => {
      dataSet = data;
      temp = dataSet.data.currently.temperature;
      $("#test").text("It is "+temp+"ºC in Toronto");
    });
