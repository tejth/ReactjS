const API_KEY = "e711a8c063ba092e44574ae8a6e2b756";
const API_URL = "http://api.openweathermap.org/data/2.5/forecast";

export const getWeather = async (city, country) => {
  try {
    const response = await fetch(
      `${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error while calling the API", error.message);
    return { error: error.message };
  }
};
