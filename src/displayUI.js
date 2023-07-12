import temp from './assets/thermometer.png';
import humid from './assets/humidity.png';
import wind from './assets/wind.png';

const info1 = document.querySelector('.info-1');
const info2 = document.querySelector('.info-2');
const weatherImg = document.querySelector('#dayornight');
const warning = document.querySelector('.warning-msg');

function unchild(parent) {
  var child = parent.firstChild;
  while (child) {
    child.remove();
    child = parent.firstChild;
  }
}

function displayWeather(weather) {
  unchild(info1);
  unchild(info2);

  //info-1
  const cloud = document.createElement('p');
  cloud.className = 'cloud';
  cloud.textContent = weather.cloud;
  const location = document.createElement('p');
  location.className = 'location';
  location.textContent = `${weather.location}, ${weather.country}`;
  const tempC = document.createElement('h1');
  tempC.textContent = `${weather.temp_c} °C`;
  const icon = document.createElement('img');
  icon.src = weather.icon;
  info1.append(cloud, location, tempC, icon);

  //info-2
  const feelsLike = document.createElement('div');
  feelsLike.className = 'i2-container';
  const feelsLikeImg = document.createElement('img');
  feelsLikeImg.src = temp;
  const feelsLikeTt = document.createElement('p');
  feelsLikeTt.textContent = 'Feels Like';
  const feelsLikeInfo = document.createElement('h3');
  feelsLikeInfo.textContent = `${weather.feelslike_c} °C`;
  feelsLike.append(feelsLikeImg, feelsLikeTt, feelsLikeInfo);

  const humidity = document.createElement('div');
  humidity.className = 'i2-container';
  const humImg = document.createElement('img');
  humImg.src = humid;
  const humTt = document.createElement('p');
  humTt.textContent = 'Humidity'
  const humInfo = document.createElement('h3');
  humInfo.textContent = `${weather.humidity} %`;
  humidity.append(humImg, humTt, humInfo);

  const windspd = document.createElement('div');
  windspd.className = 'i2-container';
  const windImg = document.createElement('img');
  windImg.src = wind;
  const windTt = document.createElement('p');
  windTt.textContent = 'Wind Speed';
  const windInfo = document.createElement('h3');
  windInfo.textContent = `${weather.wind_mph} m/h`;
  windspd.append(windImg, windTt, windInfo);
  info2.append(feelsLike, humidity, windspd);

  isday(weather);
}

function isday(weather) {
  if (weather.is_day) {
    weatherImg.style.backgroundImage = `url(./daytime.gif)`;
  } else {
    weatherImg.style.backgroundImage = `url(./nighttime.gif)`;
  }
}

function displayWarning(location) {
  warning.textContent = `"${location}" not found`;

  setTimeout(() => {
    warning.textContent = '';
  }, 3000)
}

export { displayWeather, displayWarning };