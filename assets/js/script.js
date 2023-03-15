var StateBtn = document.getElementById('citySearch')
var cityName = document.getElementsByClassName('cityName')
var cityTemp = document.getElementById('cityTemp')
var cityWind = document.getElementById('cityWind')
var cityHumidity = document.getElementById('cityHum')

StateBtn.addEventListener("click", addState())

function addState() {
    var city = document.getElementById('cityInput').value
    cityName.textContent = city
    console.log(city)
}
