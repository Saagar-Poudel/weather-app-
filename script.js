const apikey = "2a57e1e4c13eb0579d5b5f223462a126";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".weather-input input");
const searchBtn = document.querySelector(".weather-input button");
const weathericon = document.querySelector(".weather-icon");

async function checkwether(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weathers").style.display = "none";
    } else {
        var data = await response.json();
        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "images/mist.png";
        }
        document.querySelector(".weathers").style.display = "block"
        document.querySelector(".error").style.display = "none";

    }


}


searchBtn.addEventListener("click", () => {

    checkwether(searchBox.value);
})

