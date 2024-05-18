//standart info

function handleSearchSubmit(event) {
    event.preventDefault()
}
let searchformElement= document.querySelector("search-form");
searchformElement.addEventListener("submit", handleSearchSubmit);
