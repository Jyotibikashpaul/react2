import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";
import { useState } from 'react';
import { red } from '@mui/material/colors';

export default function Searchbox ({updateInfo}){
    let [city, setCity]=useState("");
    let [error, setError]=useState(false);
    const url="http://api.openweathermap.org/data/2.5/weather";
   const key="a0cd88a433a84182efe488d1798cf0a3";
   let getweatherinfo=async()=>{
   try{ let response=await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
    let jsonresponse=await response.json();
   // console.log(jsonresponse); 
    let result={
        city:city,
        temp:jsonresponse.main.temp,
        tempmin:jsonresponse.main.temp_min,
        tempmax:jsonresponse.main.temp_max,
        humidy:jsonresponse.main.humidity,
        feelslike:jsonresponse.feels_like,
        weather:jsonresponse.weather[0].description,
    };
    console.log(result);
    return result; 
    }catch(err){
     throw err;
    }
   }
   let handlechange=(event)=>{
        setCity(event.target.value);
    }
    let handlesubmit=async(event)=>{
      try{  event.preventDefault();
        console.log(city);
        setCity("");
       let newinfo=await getweatherinfo();
       updateInfo(newinfo);
      }catch(err){
        setError(true);
      }

    }
   
    return( <div className='searchbox'>
       <form  onSubmit={handlesubmit}>
       <TextField id="City" label="City Name" variant="outlined"  required value={city} onChange={handlechange}/>
       <br /> <br />
       <Button variant="contained" type='submit'>Search</Button>
       {error && <p style={{color:"red"}}>No such area found</p>}

       </form>
    </div>
    )
}