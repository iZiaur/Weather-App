// import Searchbox from "./Searchbox"
// import InfoBox from "./InfoBox"
// import { useState } from "react"
// export default function WeatherApp(){
//     let [info,setinfo]=useState({
//                     city:"Delhi",
//                     weather: "haze",
//                     temperature: 36.05,
//                     Ground_Level: 976,
//                     humidity: 30,
//                     pressure:1000,
//                     sealevel: 1000
//                 })

//         function updateinfo(newinfo){
//             setinfo(newinfo)
//         }


//     return  <div style={{textAlign:"center"}}>

//         <h1>Weather App</h1>
//         <Searchbox updateinfo={updateinfo}/>
//         <InfoBox result={info}/>
//     </div>
// }


import Searchbox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState, useEffect } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  let [info, setinfo] = useState({
    city: "Delhi",
    weather: "haze",
    temperature: 36.05,
    Ground_Level: 976,
    humidity: 30,
    pressure: 1000,
    sealevel: 1000,
  });

  const text = "Weather App";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  function updateinfo(newinfo) {
    setinfo(newinfo);
  }

  return (
    <div className="app-container">
      <div className="overlay"></div>

      <div className="content">
        <h1 className="animated-title">{displayText}</h1>

        <Searchbox updateinfo={updateinfo} />

        <InfoBox result={info} />
      </div>
    </div>
  );
}