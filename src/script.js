// Function to update weather information on the page
function refreshWeather(response) {
    let temperatureElement = document.querySelector("#tempdisplay");
    let cityElement = document.querySelector("#cityname");
    let humidityElement = document.querySelector("#humidity-display");
    let windElement = document.querySelector("#wind-display");
    let dateElement = document.querySelector("#date");
    let conditionElement = document.querySelector("#condition");
    let iconElement = document.querySelector("#icon");
    let temperature = response.data.temperature.current;
    let cityName = response.data.city;
    let humidity = response.data.temperature.humidity;
    let windSpeed = response.data.wind.speed;
    let dateTimestamp = response.data.time;
    let date = new Date(dateTimestamp * 1000);
    let weathercondition = response.data.condition.description;
    let iconUrl = response.data.condition.icon_url;
    
    
    cityElement.innerHTML = cityName;
    temperatureElement.innerHTML = Math.round(temperature);
    humidityElement.innerHTML = `Humidity: ${humidity}%`;
    windElement.innerHTML = `Wind: ${windSpeed} km/h`;
    dateElement.innerHTML = formatDate(date);
    conditionElement.innerHTML = weathercondition;
    iconElement.innerHTML = `<img src="${iconUrl}" alt="Weather Icon" class="condition-icon"/>`;

}

// Function to format date
function formatDate(date) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = days[date.getDay()];

    return `${day}, ${hours}:${minutes}`;
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

// adding default loading city
searchCity("Zürich");
