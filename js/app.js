
// WEATHER APP 
const obj = {
    key: "47f3e6c698f48f28f8fb87e45d8f060f",
    url: "https://api.openweathermap.org/data/2.5/weather?q="
}
let input = document.querySelector(".search");
input.addEventListener("keypress", enterCity);
function enterCity(event) {
    if(event.keyCode === 13) {
        let city = input.value;
        getRequest(city)
    }
}
async function getRequest(location) {
    let response = await fetch(`${obj.url}${location}&units=metric&APPID=${obj.key}`);
    let json = await response.json();
    renderHTML(json);
}

function renderHTML(data) {
    // console.log(data);
    let currentData = sana();
    const place = `<h2>${data.name}, <span>${data.sys.country}</span></h2>
                   <p class="date">${currentData}</p>`;
    document.querySelector(".location").innerHTML = place;

    const tempr = `<h1 class="temp">${Math.round(data.main.temp)}<span>°C</span></h1>
                   <p class="situation">${data.weather[0].main}</p>
                   <p class="high_low">${Math.round(data.main.temp_min)}°C / ${Math.round(data.main.temp_max)}°C</p>`;
    document.querySelector(".temp_box").innerHTML = tempr;
}
// SANANI YARATISH
function sana() {
    let time = new Date(),
        days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${days[time.getDay()]} ${time.getDate()} ${months[time.getMonth()]} ${time.getFullYear()}`;
}

