// Function to update weather information on the page
function refreshWeather(response) {
    let temperatureElement = document.querySelector("#tempdisplay");
    let cityElement = document.querySelector("#cityname");
    let humidityElement = document.querySelector("#humidity-display");
    let windElement = document.querySelector("#wind-display");

    let temperature = response.data.temperature.current;
    let cityName = response.data.city;
    let humidity = response.data.temperature.humidity;
    let windSpeed = response.data.wind.speed;

    cityElement.innerHTML = cityName;
    temperatureElement.innerHTML = Math.round(temperature);
    humidityElement.innerHTML = `Humidity: ${humidity}%`;
    windElement.innerHTML = `Wind: ${windSpeed} km/h`;
}

// Function to search for a city's weather
function searchCity(city) {
    let apiKey = "ac0e90fab3b874b0te420f3c3fe852oa";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
    axios.get(apiUrl).then(refreshWeather).catch(error => {
        console.error("Error fetching weather data:", error);
        alert("City not found or an error occurred. Please try again.");
    });
}

// Function to handle the form submission
function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    searchCity(searchInput.value);
}

// Adding event listener to the form
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
