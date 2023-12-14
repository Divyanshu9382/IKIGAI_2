const apiKey = 'fafdc0f360e1fa9df845f362eb8ec2fb';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('windspeed');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
            windspeed.textContent = `Wind speed: ${data.wind.speed}`;
            humidity.textContent = `Humidity: ${data.main.humidity}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}