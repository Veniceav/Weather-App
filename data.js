let weather = {
        apiKey: '8d8c3996f49387f8a7a1dab0faab3502',
    fetchWeather: function(location) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + location.toLowerCase()
            + "&units=metric&appid="
            + this.apiKey
            )
            .then(response => response.json())  
            .then(data => this.displayingWeather(data))        
                .catch(err => {
                    console.log('Fetch Error', err.message)
                })
    },
    displayingWeather: function(data) {
        const {name} = data;
        const {description} = data.weather[0];
        const {temp, feels_like, temp_min, temp_max, humidity} = data.main;
        const {speed} = data.wind;
        const {all} = data.clouds;
        console.log(name, description, temp, feels_like, temp_min, temp_max, humidity, all);
        document.querySelector('#location').innerText = name;
        document.querySelector('#overviewLabel').innerText = description;
        document.querySelector('#activeTemp').innerText = Math.round(temp) + '°C';
        document.querySelector('#feelsLikeTemp').innerText = "Feels like " + Math.round(feels_like) + '°C';
        document.querySelector('#highTemp').innerText = "High: " + Math.round(temp_max) + '°C';
        document.querySelector('#lowTemp').innerText = "Low: " + Math.round(temp_min) + '°C';
        document.querySelector('#humidity').innerText = 'Humidity: ' + humidity + '%';
        document.querySelector('#windSpeed').innerText = 'Wind Speed: ' + Math.round(speed) + ' Kph';
        document.querySelector('#cloudiness').innerText = 'Cloudiness: ' +Math.round(all) + ' %';
    }
};