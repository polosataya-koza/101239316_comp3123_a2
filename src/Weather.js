import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const Weather = () => {
    const [weather, setWeather] = useState({});
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var date = new Date();

    const fetchWeather = async () => {
        const { data } = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=6508c02ccc05f225734d2568a4c6dadd');
        console.log(data);
        setWeather(data);
        return data;
    }

    return (
        <div className="main-container">
            <div className="topic">
            <h1>Weather in Toronto</h1>
            <button type="button" className="button-click" onClick={fetchWeather}>Upload</button>
            <br/><br/>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name"><span>{weather.name}, {weather.sys.country}</span></h2>
                    <h3 className="city-name-med">{months[(date.getMonth()).toLocaleString()]} {date.getDate()}, {days[date.getDate()+1]}</h3>
                    <div className="city-temp">{Math.round(weather.main.temp)}<sup>&deg;C</sup></div>
                    <div className="city-temp-medf">Feels like: {Math.round(weather.main.feels_like)}<sup>&deg;C</sup></div>
                    <div className="city-temp-mini">min: {Math.round(weather.main.temp_min)}<sup>&deg;C</sup> max: {Math.round(weather.main.temp_max)}<sup>&deg;C</sup></div>
                    <div className="city-temp-med">Humidity: {Math.round(weather.main.humidity)}<span>%</span></div>
                    <div className="city-temp-med">Wind speed: {Math.round(weather.wind.speed)}m/s</div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
}

export default Weather;
