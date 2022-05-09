const apikey = 'fca046a0898814f1dda57f04d359a5a5';
const main = document.querySelector('main');
const form = document.querySelector('form');
const search = document.querySelector('#search');


const url = (city)=>
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;


async function getWeatherByLocation(city){
const resp = await fetch(url(city))
const respData = await resp.json();
console.log(respData)
addWeatherToPage(respData);
}

function addWeatherToPage(data){
    const temp = data.main.temp;
    const weather = document.createElement('div');
    weather.classList.add('weather');
    weather.innerHTML = `
    <h2>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
    ${temp.toFixed(1)}°C
    </h2>
    <small>${data.weather[0].description}</small>
    <small>in ${search.value}</small>
    `
    main.innerHTML = '';
    main.appendChild(weather);
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const city = search.value
    if(city){

        getWeatherByLocation(city);
    }
})