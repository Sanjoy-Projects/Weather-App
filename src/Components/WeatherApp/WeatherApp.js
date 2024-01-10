import Footer from '../Footer/Footer'
import Info from '../InfoBox/Info'
import Input from '../Input/Input'
import React, { useState } from 'react'

function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 29.11,
        humidity: 57,
        temp: 27.99,
        tempMax: 27.99,
        tempMin: 26.94,
        weather: "Smoke"
    })
    let updateInfo = (result) =>{
         setWeatherInfo(result)
    }
    return (
        <div className='TotalSection'>
            <Input updateInfo={updateInfo}/>
            <Info infoResult={weatherInfo}/>
            <Footer/>
        </div>
    )
}

export default WeatherApp

