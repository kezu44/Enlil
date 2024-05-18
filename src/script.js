//standart info

function handleSearchSubmit(event) {
    event.preventDefault()
    let searchInput = document.querySelector("#search-input");
    let citynameElement = document.querySelector("#cityname");
    citynameElement.innerHTML = searchInput.ariaValueMax;

}
let searchformElement= document.querySelector("search-form");
searchformElement.addEventListener("submit", handleSearchSubmit);
