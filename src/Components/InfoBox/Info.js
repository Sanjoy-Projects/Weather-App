import React from 'react'
import './Info.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

function Info({ infoResult }) {
    const HotUrl = "https://images.unsplash.com/photo-1601674213739-a76b845ec04d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const ColdUrl = "https://images.unsplash.com/photo-1608259158285-3ea03e3105d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHx3aW50ZXIlMjBzZWFzb258ZW58MHx8MHx8fDA%3D"
    const RainyUrl = "https://images.unsplash.com/photo-1619260584294-8a4e63f5ade5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <div className='infoBoxSection'>
            <div className='infoBox'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={infoResult.humidity >= 80 ? RainyUrl : infoResult.temp > 20 ? HotUrl : ColdUrl}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <h4> City: {infoResult.city}
                                <span className='weatherIcon'>
                                    {
                                        infoResult.humidity >= 80 ? <ThunderstormIcon style={{color:"rgb(149, 149, 149)",fontSize:"25px"}}/> : infoResult.temp > 20 ? <WbSunnyIcon style={{color:"orange",fontSize:"25px"}}/> : <AcUnitIcon style={{color:"rgb(172, 229, 255)",fontSize:"25px"}}/>
                                    }
                                </span></h4>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>The weather can be described as <b>{infoResult.weather}</b> and feels like <b>{infoResult.feelsLike}&deg;C</b></p>
                            <p>Humidity: {infoResult.humidity}</p>
                            <p>Temp: {infoResult.temp}&deg;C</p>
                            <p>Max Temp: {infoResult.tempMax}&deg;C</p>
                            <p>Min Temp: {infoResult.tempMin}&deg;C</p>
                            <p>Weather: {infoResult.weather}</p>

                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}

export default Info;
