import { useState } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InforBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({result}){
  const INIT_URL="https://images.unsplash.com/photo-1599059021750-82716ae2b661?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   const HOT_URL="https://images.unsplash.com/photo-1572246538688-3f326dca3951?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   const COLD_URL="https://images.unsplash.com/photo-1431036101494-66a36de47def?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   const RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return <div className="weatherparent">
        
        <div className="cards">
        <Card sx={{width: 350 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={result.humidity>80?RAIN_URL:(result.temperature>15?HOT_URL:COLD_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {result.city}&nbsp;{result.humidity>80?
          <ThunderstormIcon/>:(result.temperature>15?<WbSunnyIcon/>:<AcUnitIcon/>)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
         <p>Temperature = {result.temperature}&deg;C</p>
         <p>Ground Level={result.Ground_Level}</p>
         <p>Humidity={result.humidity}</p>
         <p>Pressure={result.pressure}</p>
         <p>Sea Level={result.sealevel}</p>
         <p>The Weather Condition is <i>{result.weather}</i></p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>

    </div>
}