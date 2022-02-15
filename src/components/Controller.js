import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import './controller.css';


const API = {
    link: "http://api.openweathermap.org/data/2.5/weather?q=",
    key: "&appid=a9987845c80c933c697521142e6fce7e&units=metric"
}


const Controller = () => {

    const [city, setCity] = useState("");
    const [currentWeather, setCurrentWeather] = useState();


    // Handles API call
    const fetchWeather = async () => {
        // Fetch results
        const { data } = await axios.get(API.link + city + API.key);
        // Store in state
        setCurrentWeather(data);
    };


    
    return (
        <div className="controller">

            {/* City Input */}
            <input placeholder='City Name' className='cityInput' type="text" value={city} onChange={(e) => setCity(e.target.value)} />

            {/* Submit Button */}
            <button className="requestButton" onClick={fetchWeather}>Request Weather</button>

            {/* Display results if stored in state */}
            {currentWeather && <Results currentWeather={currentWeather} />}
        </div>
    );
};



export default Controller;