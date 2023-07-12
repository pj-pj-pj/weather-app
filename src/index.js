import { displayWeather, displayWarning } from "./displayUI";

const locInput = document.querySelector('input');
const btn = document.querySelector('button');
let loc = 'canada';

fetchWeather();

async function fetchWeather() {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=df866be985d0441ca5752609230207&q=${loc}`, { mode: 'cors' });
    const result = await response.json();

    const weather = {
      cloud: result.current.condition.text,
      icon: result.current.condition.icon,
      location: result.location.name,
      country: result.location.country,
      feelslike_c: result.current.feelslike_c,
      humidity: result.current.humidity,
      is_day: result.current.is_day == 0 ? false : true,
      temp_c: result.current.temp_c,
      wind_mph: result.current.wind_mph
    };

    displayWeather(weather)
  } catch (error) {
    displayWarning(loc);
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter' && event.target === locInput && locInput.value) fetchOnClick();
}

function fetchOnClick() {
  loc = locInput.value;
  fetchWeather();
  locInput.value = '';
}

btn.onclick = fetchOnClick;
document.addEventListener('keydown', handleKeyPress);