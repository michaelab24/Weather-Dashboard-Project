const weatherapiKey = "&api_key=07543a927539e6db80c95ecc58f16eb9"
//var cityheadEl =
//var templabelEl =
//var windlabelEl =
//var humiditylabelEl =
//once city is entered in input
//the api data is called to populate boxes with the captured data
//calling for current and possible call for 5 day



//cityheadEl.text(response.name);
//tempDiv.text("Temperature: "+ response.main.temp + "°F")
//windDiv.text("Wind: " + response.wind.speed + "mph")
//humidityDiv.text("Humidity: " + response.main.humidity + "%")


$(".searchButton").on("click", citySearch);

function apiFetch(city) {
    //fetch the api data using api link and key
    //pass in the city and api key
    var searchCity = document.querySelector("#cityInput").value;
    var cityName = document.querySelector("#cityName");
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=07543a927539e6db80c95ecc58f16eb9&units=imperial")

        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            var weatherContainerEl = document.querySelector("#daily-weather");

            cityName.textContent = city

            var tempDiv = document.querySelector("#cityTemp")
            tempDiv.textContent = (response.main.temp + "°F")

            var windDiv = document.querySelector("#cityWind")
            windDiv.textContent = (response.wind.speed + "mph")


            var humidityDiv = document.querySelector("#cityHumid")
            humidityDiv.textContent = (response.main.humidity + "%")
            // humidityDiv.text("Humidity: " + response.main.humidity + "%")

            //var uvindexDiv = document.createElement("div")
            //uvindexDiv.textContent = response.

            console.log(weatherContainerEl)
        });
    fivedayFetch(city)
}

function fivedayFetch(city) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=07543a927539e6db80c95ecc58f16eb9&units=imperial")

        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            var weatherContainerEl = document.querySelector("#fivedayCast");


            var tempDiv = document.querySelector("#temp1")
            tempDiv.textContent = (response.data.temp + "°F")

            var windDiv = document.querySelector("#wind1")
            windDiv.textContent = (response.wind.speed + "mph")


            var humidityDiv = document.querySelector("#hum1")
            humidityDiv.textContent = (response.main.humidity + "%")

            //var tempDiv = document.querySelector("#temp2")
            //tempDiv.textContent = (response.data.temp + "°F")

            // var windDiv = document.querySelector("#wind2")
            //windDiv.textContent = (response.wind.speed + "mph")


            //  var humidityDiv = document.querySelector("#hum2")
            // humidityDiv.textContent = (response.main.humidity + "%")

            //var tempDiv = document.querySelector("#temp3")
            //tempDiv.textContent = (response.data.temp + "°F")

            // var windDiv = document.querySelector("#wind3")
            //windDiv.textContent = (response.wind.speed + "mph")


            //  var humidityDiv = document.querySelector("#hum3")
            // humidityDiv.textContent = (response.main.humidity + "%")

            //var tempDiv = document.querySelector("#temp4")
            //tempDiv.textContent = (response.data.temp + "°F")

            // var windDiv = document.querySelector("#wind4")
            //windDiv.textContent = (response.wind.speed + "mph")


            //  var humidityDiv = document.querySelector("#hum4")
            // humidityDiv.textContent = (response.main.humidity + "%")

            //var tempDiv = document.querySelector("#temp5")
            //tempDiv.textContent = (response.data.temp + "°F")

            // var windDiv = document.querySelector("#wind5")
            //windDiv.textContent = (response.wind.speed + "mph")


            //  var humidityDiv = document.querySelector("#hum5")
            // humidityDiv.textContent = (response.main.humidity + "%")

        });
}

//var forecast = weather.list;
//for(var i=5; i < forecast.length; i=i+8){
//var dailyForecast = forecast[i];
//array[0]+7
//for loop start at 0

function citySearch() {
    var searchTerm = $("#cityInput").val()
    console.log(searchTerm)
    apiFetch(searchTerm)
}






//once data is called and boxes are populated
//the city placed in the input is saved to local storage
//the city is then returned in a search history list