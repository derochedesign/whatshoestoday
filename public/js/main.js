var temp;
var dataSet;

fetch('/get-weather')
		.then(res => res.json())
    .then(data => {
      dataSet = data;
			console.log(data);
      temp = dataSet.data.currently.temperature;
      $("#test").text("It is "+temp+"ºC in Toronto");
    });
