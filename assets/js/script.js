const StateBtn = document.getElementById('citySearch')
const cityName = document.getElementsByClassName('cityName')
const cityTemp = document.getElementById('cityTemp')
const cityWind = document.getElementById('cityWind')
const cityHumidity = document.getElementById('cityHum')

StateBtn.addEventListener("click", addState())

function addState() {
    const city = document.getElementsByClassName('cityInput').value
    cityName.textContent = city
    console.log(city)
}
