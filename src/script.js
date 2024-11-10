

let apiKey = `8o409ea0285c3ece49f8e650etbdc4a9`;

let form = document.querySelector(".weather-search");
form.addEventListener("submit", displayCity);

function displayCity(event){
event.preventDefault();


let searchInput = document.querySelector("#search-box");
let cityValue = searchInput.value.trim();

  search(cityValue);
}


 
function showInfo(response){
  let temp = document.querySelector("#temp-value")
  console.log(document.querySelector("#temp-value"))
  temp.innerHTML = Math.round(response.data.temperature.current)
console.log(response.data.temperature.current)
let city = document.querySelector("#city");
city.innerHTML = (response.data.city);
}


function search(cityValue){
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityValue}&key=${apiKey}`

axios.get(apiUrl).then(showInfo)

} 
