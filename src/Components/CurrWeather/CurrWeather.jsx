import React from 'react'
import './currWeather.scss'
const CurrWeather = ({ data }) => {
    return (
        <div className='CurrWeather'>
            <div className="top">
                <div className="text">
                    <p className='city'>{data.city}</p>
                    <p className='desc'>{data.weather[0].description}</p>
                </div>
                <img src={`/icons/${data.weather[0].icon}.png`} alt="weather" />
            </div>
            <div className="bottom">
                <div className="temp">{Math.round(data.main.temp)}°C</div>
                <div className="details">
                    <div className="parameter-row">
                        <span className="para-label top">Details :</span>
                    </div>
                    <div className="parameter-row">
                        <span className="para-label">Feels like</span>
                        <span className="para-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="para-label">Wind</span>
                        <span className="para-value">{Math.round(data.wind.speed)} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="para-label">Humidity</span>
                        <span className="para-value">{Math.round(data.main.humidity)} %</span>
                    </div>
                    <div className="parameter-row">
                        <span className="para-label">pressure</span>
                        <span className="para-value">{Math.round(data.main.pressure)} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrWeather
