import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infobox.css/"

export default function Infobox({info}){
    const cold_imgurl="https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const hot_imgurl ="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const Rain_imgurl="https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return(
        <div className='infobox'>
    
            <div className='cardcontainer'>
   <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?Rain_imgurl:info.temp>18?hot_imgurl:cold_imgurl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity>80?<ThunderstormIcon></ThunderstormIcon>:info.temp>18?<WbSunnyIcon></WbSunnyIcon>:<AcUnitIcon></AcUnitIcon>
          }

        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature={info.temp}</p>
            <p>MinTemperature={info.tempmin}</p>
            <p>Max Temperature={info.tempmax}</p>
            <p>Humidity={info.humidity}</p>
            <p>The weather can be described as <i>{info.weather}</i></p>
        </Typography>
      </CardContent>
    
    </Card>
           </div>
        </div>
    )
}
