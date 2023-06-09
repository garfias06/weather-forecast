
// FORM Variables
var searchCity = document.querySelector(".search-city");
var inputCity = document.querySelector("#city");
var searchBtn = document.querySelector("#search");
var searchHistory = document.querySelector(".search-history");
var api = "9c797f3ee7047a8ba0a153885817289f"


var city = JSON.parse(localStorage.getItem("City")) || [];
city.reverse()
cityList()
function cityList() {
    searchHistory.innerHTML = "";

    for (let i = 0; i < city.length; i++) {
        var cities = city[i];

        var button = document.createElement("button");
        button.textContent = cities;
        button.setAttribute("data-index", i);
        button.setAttribute("value", city[i]);
        button.addEventListener('click', savedButtonSearch)
        button.classList.add("list-button")

        searchHistory.appendChild(button);
    }
}

function savedButtonSearch(e) {
    runWeather(e.target.value);
    runForecast(e.target.value)
}

function storeCity(cityText) {
    // check if the city already exists in the city array
    if (city.includes(cityText)){
        return;
    }
    city.push(cityText);
    localStorage.setItem("City", JSON.stringify(city));
    city.reverse()
    cityList()
}

searchCity.addEventListener("submit", function (event) {
    event.preventDefault();
    var cityText = inputCity.value.trim().toLowerCase();
    if (cityText === '') {
        return;
    }
    runWeather(cityText)
    runForecast(cityText)

    inputCity.value = "";
    


})

// Current Weather Data
function runWeather(cityText) {
    var requestCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityText + ',USA&units=imperial&appid=' + api;

    fetch(requestCurrentWeather)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log(data)

            var mainCity = document.querySelector(".main-city");
            var mainDate = document.querySelector(".main-date");
            var mainTemp = document.querySelector(".main-temp");
            var mainWind = document.querySelector(".main-wind");
            var mainHumidity = document.querySelector(".main-humidity");

            mainCity.textContent = "City: " + data.name;
            mainDate.textContent = "Date: " + data.timezone;
            mainTemp.textContent = "Temp: " + data.main.temp + " °";
            mainWind.textContent = "Wind: " + data.wind.speed + " miles/hour";
            mainHumidity.textContent = "Humidity: " + data.main.humidity + "%";
            storeCity(data.name)
        });


}

 // 5day Weather Data
function runForecast(cityText){


 var request5dayWeather = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityText + ',USA&units=imperial&appid=' + api;

 fetch(request5dayWeather)
     .then(function (response) {
         return response.json();
     })
     // DAY 1:

     .then(function (data) {
         console.log(data)

         // DAY 1:

         console.log(data.list[3]);

         var date1 = document.querySelector(".date1");
         var temp1 = document.querySelector(".temp1");
         var wind1 = document.querySelector(".wind1");
         var humidity1 = document.querySelector(".humidity1");

         date1.textContent = "Date: " + data.list[3].dt_txt;
         temp1.textContent = "Temp: " + data.list[3].main.temp + " °";
         wind1.textContent = "Wind: " + data.list[3].wind.speed + " miles/hour";
         humidity1.textContent = "Humidity: " + data.list[3].main.humidity + "%";


         // DAY 2:

         console.log(data.list[11]);

         var date2 = document.querySelector(".date2");
         var temp2 = document.querySelector(".temp2");
         var wind2 = document.querySelector(".wind2");
         var humidity2 = document.querySelector(".humidity2");

         date2.textContent = "Date: " + data.list[11].dt_txt;
         temp2.textContent = "Temp: " + data.list[11].main.temp + " °";
         wind2.textContent = "Wind: " + data.list[11].wind.speed + " miles/hour";
         humidity2.textContent = "Humidity: " + data.list[11].main.humidity + "%";

         // DAY 3:

         console.log(data.list[19]);

         var date3 = document.querySelector(".date3");
         var temp3 = document.querySelector(".temp3");
         var wind3 = document.querySelector(".wind3");
         var humidity3 = document.querySelector(".humidity3");

         date3.textContent = "Date: " + data.list[19].dt_txt;
         temp3.textContent = "Temp: " + data.list[19].main.temp + " °";
         wind3.textContent = "Wind: " + data.list[19].wind.speed + " miles/hour";
         humidity3.textContent = "Humidity: " + data.list[19].main.humidity + "%";


         // DAY 4

         console.log(data.list[27]);

         var date4 = document.querySelector(".date4");
         var temp4 = document.querySelector(".temp4");
         var wind4 = document.querySelector(".wind4");
         var humidity4 = document.querySelector(".humidity4");

         date4.textContent = "Date: " + data.list[27].dt_txt;
         temp4.textContent = "Temp: " + data.list[27].main.temp + " °";
         wind4.textContent = "Wind: " + data.list[27].wind.speed + " miles/hour";
         humidity4.textContent = "Humidity: " + data.list[27].main.humidity + "%";

         // DAY 5

         console.log(data.list[35]);

         var date5 = document.querySelector(".date5");
         var temp5 = document.querySelector(".temp5");
         var wind5 = document.querySelector(".wind5");
         var humidity5 = document.querySelector(".humidity5");

         date5.textContent = "Date: " + data.list[35].dt_txt;
         temp5.textContent = "Temp: " + data.list[35].main.temp + " °";
         wind5.textContent = "Wind: " + data.list[35].wind.speed + " miles/hour";
         humidity5.textContent = "Humidity: " + data.list[35].main.humidity + "%";

     });

}
