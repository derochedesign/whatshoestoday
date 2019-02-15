var temp;
var timezone;
var dataSet;
var userPosition = {
	"lat":"0",
	"long":"0"
}
$("#getCoords").hide();

var currDate = new Date();
var currHour = currDate.getHours(); //this is 24hr
geoFindMe();

function geoFindMe() {

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    userPosition.lat = position.coords.latitude;
    userPosition.long = position.coords.longitude;
		postReq();
    console.log('<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>');
  }

  function error() {
    console.log("Unable to retrieve your location");
		$("#getCoords").show();
  }

  console.log("<p>Locating…</p>");

  navigator.geolocation.getCurrentPosition(success, error);
}

$("#submitCoords").click(function() {
	var tempPosition = $("#getLat").val()+", "+$("#getLong").val();
	console.log(tempPosition);

	if (checkValid(tempPosition)){
		userPosition.lat = $("#getLat").val();
		userPosition.long = $("#getLong").val();
		console.log("good");
		alert("saved location");
		$("#getCoords").hide();
		postReq();
	}
	else {
		console.log("failed");
		alert("incorrect");
	}
});

function checkValid(data) {
	var re = /^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/
	return re.test(data);
}

function postReq() {
	console.log(userPosition);
	    $.ajax({
	      type: 'POST',
	      url: '/search',
	      data: userPosition,
	      success: function(data){
	        //do something with the data via front-end framework
					console.log("saved location");
	      }
	    }); //close ajax
}



$("#getTemp").click(function() {
	fetch('/get-weather')
			.then(res => res.json())
	    .then(data => {
	      dataSet = data;
				console.log(data);
	      temp = dataSet.data.currently.temperature;
				timezone = dataSet.data.timezone;
	      $("#test").text("It is "+temp+"ºC in "+timezone);
	    });
});

$("#getSnowHistory").click(function() {
	fetch('/get-history')
			.then(res => res.json())
	    .then(data => {
	      dataSet = data;
				console.log(data);
				if (dataSet.data.hourly.data[currHour-1].precipType == "snow" || dataSet.data.hourly.data[currHour-2].precipType == "snow") {
						$("#test").text("It has snowed in the last two hours.");
				}
				else if (dataSet.data.hourly.data[currHour-1].precipType == "rain" || dataSet.data.hourly.data[currHour-2].precipType == "rain") {
						$("#test").text("It has not snowed, but it did rain in the last two hours.");
				}
				else {
					$("#test").text("It has not snowed in the last two hours.");
				}

	    });
});
