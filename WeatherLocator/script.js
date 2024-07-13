// Importing the getWeather function from weather.js
import { getWeather } from "./weather.js";

// Function to update weather details on the page
const updateWeatherDetails = async (cityName, country) => {
  try {
    // Fetch weather data
    const weatherData = await getWeather(cityName, country);

    // Extract relevant data
    const temperature = weatherData.list[0].main.temp;
    const humidity = weatherData.list[0].main.humidity;
    const windSpeed = weatherData.list[0].wind.speed;
    const city = weatherData.city.name;
    const clouds = weatherData.list[0].clouds.all;

    // Update DOM elements with fetched data
    const tempSpan = document.querySelector(".tempspan");
    const cityNameSpan = document.querySelector(".temp-city-name");
    const humidityValue = document.querySelector(".hum-value");
    const windValue = document.querySelector(".wind-value");
    const cloudValue = document.querySelector(".cloud-value");

    tempSpan.textContent = `${temperature} °C`;
    cityNameSpan.textContent = city;
    humidityValue.textContent = `${humidity}%`;
    windValue.textContent = `${windSpeed} Km/h`;
    cloudValue.textContent = `${clouds}`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

// Function to fetch weather details for Delhi initially
const fetchInitialWeather = () => {
  const defaultCity = "Delhi";
  const country = "India"; // Assuming the country is always India for this example

  // Call function to update weather details
  updateWeatherDetails(defaultCity, country);
};

// Call function to fetch and display weather for Delhi initially
fetchInitialWeather();

// Function to handle search button click
const searchButton = document.querySelector(".nav img");
searchButton.addEventListener("click", () => {
  const input = document.querySelector('.nav input[type="text"]');
  const cityName = input.value.trim();
  const country = "India"; // Assuming the country is always India for this example

  // Call function to update weather details
  updateWeatherDetails(cityName, country);

  // Clear input field after grabbing the value
  input.value = "";
});

// Function to handle Enter key press event
const inputField = document.querySelector('.nav input[type="text"]');
inputField.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const cityName = inputField.value.trim();
    const country = "India"; // Assuming the country is always India for this example

    // Call function to update weather details
    updateWeatherDetails(cityName, country);

    // Clear input field after grabbing the value
    inputField.value = "";
  }
});
