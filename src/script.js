

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
  temp.innerHTML = Math.round(response.data.temperature.current)

let city = document.querySelector("#city");
city.innerHTML = (response.data.city);

let condition = document.querySelector(".weather-condition")
condition.innerHTML= (response.data.condition.description)

let humidity = document.querySelector("#humidity-value")
humidity.innerHTML = (response.data.temperature.humidity)

let wind = document.querySelector("#wind-speed-value")
wind.innerHTML = (response.data.wind.speed) 

let time = document.querySelector("#time")
 let date = new Date(response.data.time * 1000)
 time.innerHTML = formatDate(date)

 let icon = document.querySelector("#icon")
    icon.innerHTML = `<img src="${response.data.condition.icon_url}" />`
}



function formatDate(date) {
let hour = date.getHours();
let minutes = date.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }

  return ` ${day}, ${hour}:${minutes} ,`;

}





function search(cityValue){
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityValue}&key=${apiKey}`

axios.get(apiUrl).then(showInfo)

} 
