import React, { useState } from 'react'
import './Input.css'
function Input({updateInfo}) {
    const [city, setCity] = useState("")
    const [error,setError] = useState(false)
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = "91d8c29e6ef22f5621dee734533e139e"

    let response = async () => {
        try{
            let fetchUrl = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonData = await fetchUrl.json();
        console.log(jsonData);
        let result = {
            city: city,
            humidity: jsonData.main.humidity,
            temp: jsonData.main.temp,
            tempMin: jsonData.main.temp_min,
            tempMax: jsonData.main.temp_max,
            feelsLike: jsonData.main.feels_like,
            weather: jsonData.weather[0].description
        }
        console.log(result);
        return result
        }catch(error){
            throw error
        }
    }
    let cityName = (event) => {
        setCity(event.target.value)
    }
    let submit = async (event) => {
       try{
        event.preventDefault()
        console.log(city);
        setCity("")
        let cityInfo = await response()
        updateInfo(cityInfo)
       }catch(error){
        setError(true)
       }

    }

    return (
        <div className='WeatherApp'>
            <h2 className='heading'>Weather App</h2>
            <div className='formSection'>
                <form className='form' onSubmit={submit}>
                    <input placeholder='City name ' className='textField' required value={city} onChange={cityName}></input>
                    <button className='searchBtn' type='Submit'>Search</button>
                </form>
            </div>
            <span>
                {error&&<p style={{textAlign:"center",color:"orangered",fontFamily:"monospace"}}>No such place exists!</p>}
             </span>
        </div>
    )
}

export default Input;
