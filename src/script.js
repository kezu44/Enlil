//standart info
function refreshWeather(response) {
   let temperatureElement = document.querySelector("#tempdisplay");
   let temperature = response.data.temperature.current;
   temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
    let apiKey = "ac0e90fab3b874b0te420f3c3fe852oa";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
   axios.get(apiUrl).then(refreshWeather);
   
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let citynameElement = document.querySelector("#cityname");
    citynameElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}


let searchformElement= document.querySelector("#search-form");
searchformElement.addEventListener("submit", handleSearchSubmit);
