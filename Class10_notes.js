/* $.ajax({
	type: "GET",
	url: "www.google.com",
	data:
}) */

// openweathermap.org/api

$(document).ready(function () {
	var weatherAPI = 'http://api.openweathermap.org'

	var data = {
		q: "Albany, NY",
		units: "imperial"
	};


function showWeather(weatherReport) {
	console.log(weatherReport);
}

$.getJSON(weatherAPI, data, showWeather);

});