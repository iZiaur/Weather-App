import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send';
import "./Searchbox.css" 
import { useState } from 'react';





export default function Searchbox({updateinfo}){
    let[city,setcity]=useState("")
    let[error,seterror]=useState(false)
    let [result,setresult]=useState([])

    
    async function getinfo(city){
        try{let URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba1292c9f0c59745ab6756587ee4c81b&units=metric`

        let res=await fetch(URL)
        let jsonresponse=await res.json()
      
        let newResult = {
                city:city,
                weather: jsonresponse.weather[0].description,
                temperature: jsonresponse.main.temp,
                Ground_Level: jsonresponse.main.grnd_level,
                humidity: jsonresponse.main.humidity,
                pressure: jsonresponse.main.pressure,
                sealevel: jsonresponse.main.sea_level
            };
                    return newResult
                }catch(err){
                    throw err
                }

        
    }

    function handlechange(event){
        
        setcity(event.target.value)
        
    }

    async function handleSubmit(event){
        try{event.preventDefault()
        console.log(city)
        let newinfo=await getinfo(city)
        updateinfo(newinfo)
        seterror(false)
    }catch(err){
        seterror(true)
    }
        
    }
    return <div className="search">
        
        <form onSubmit={handleSubmit}> <TextField id="city" label="City" variant="outlined" required  value={city} onChange={handlechange}/><br></br><br></br>
        <Button variant="contained" endIcon={<SendIcon />} type="submit" >

            Search
            </Button>
            {error && <h2 style={{color:"red"}}>No such city Exists!</h2>}
            </form>
  
    </div>
}