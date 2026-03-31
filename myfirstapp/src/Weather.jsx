import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) {
      setError("Enter City Name");
      setWeatherData(null);
      return;
    }

    const apiKey = "9646c0419156b3fde4fdef9532934b0c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City Not Found");
      }
      const data = await response.json();
      setWeatherData(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gradient-to-br from-teal-400 to-indigo-500 p-8 rounded-2xl">
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="flex-1 p-3 rounded-full text-gray-900"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="ml-3 p-3 bg-white text-black rounded-full"
            onClick={fetchWeather}
          >
            🔍
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {weatherData && (
          <div className="text-center">
            <h2 className="text-3xl font-bold">{weatherData.name}</h2>
            <img
              className="w-24 mx-auto"
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather icon"
            />
            <h1 className="text-5xl font-bold">{weatherData.main.temp}°C</h1>
            <p className="text-lg capitalize">{weatherData.weather[0].description}</p>
            <div className="flex justify-around mt-4">
              <div className="text-center">
                <p className="text-lg">💧 {weatherData.main.humidity}%</p>
                <p>Humidity</p>
              </div>
              <div className="text-center">
                <p className="text-lg">🌬 {weatherData.wind.speed} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
