//navigator, geolocation, getCurrentPosition()

const API_KEY ="8185c86a35a8d26ed3650d8674f5ddab"
function onGeoOk(position){
    const lat  = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data=>{
            const weather = document.querySelector("#weather p:first-child");
            const city = document.querySelector("#weather p:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}/ ${data.main.temp}°C`;

        }); //request 
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
};

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)