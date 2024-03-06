import Searchbox from "./searchbox";
import Infobox from "./infobox";
import { useState } from "react";
export default function Weatherapp(){
    const[weatherinfo, setWeatherinfo]=useState({
    city:"Balasore",
    temp:32.87,
    tempmin:32.87,
    tempmax:32.87,
    humidity:37,
    weather:"clear sky",
})
let updateinfo=(newinfo)=>{
    setWeatherinfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <Searchbox updateInfo={updateinfo}/>
            <Infobox info={weatherinfo}/>
        </div>
    )
}