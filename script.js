'use strict';

// selecting the variables

const InputBox = document.querySelector('.SearchCity');
const countryName = document.querySelector('.countryName');
const stateName = document.querySelector('.stateName');
const cityName = document.querySelector('.cityName');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windSpeed');
const temperature = document.querySelector('.temperature');
const weatherStatus = document.querySelector('.weatherStatus');
const weatherImg = document.querySelector('.weatherImg');

// fetching the data

let getdata = async (event) => {
  event.preventDefault();

  let city = InputBox.value;

  let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?Key=cc1ddde4557b4d9aaab63145232009&q=${city}`);

  let orgData = await data.json();

  countryName.textContent = orgData.location.country;

  stateName.textContent = orgData.location.region;

  cityName.textContent = orgData.location.name; 

  humidity.textContent = orgData.current.humidity;

  windSpeed.textContent = orgData.current.wind_kph;

  temperature.textContent = orgData.current.temp_c;

  weatherStatus.textContent = orgData.current.condition.text;

  weatherImg.src = orgData.current.condition.icon;
}