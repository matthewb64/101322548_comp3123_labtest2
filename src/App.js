import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [country, setcountry] = useState();
  const [city, setcity] = useState();
  const [currTemp, setcurrTemp] = useState();
  const [minTemp, setminTemp] = useState();
  const [maxTemp, setmaxTemp] = useState();
  const [pressure, setpressure] = useState();
  const [humidity, sethumidity] = useState();
  const [windSpeed, setwindSpeed] = useState();
  const [main, setmain] = useState();
  const [mainDescription, setmainDescription] = useState()
  const [imgIcon, setimgIcon] = useState()
  const [visibility, setvisibility] = useState()
  async function getTemperatureStats() {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=4b6d15f48aa65a7accf77452aec91f67`)
    const res = await response.json()
    if (res) {
      console.log(res.name)
      setcountry(res.sys.country);
      setcity(res.name);
      setcurrTemp(res.main.temp)
      setminTemp(res.main.temp_min)
      setmaxTemp(res.main.temp_max)
      setpressure(res.main.pressure)
      sethumidity(res.main.humidity)
      setwindSpeed(res.wind.speed)
      setmain(res.weather[0].main);
      setmainDescription(res.weather[0].description);
      setimgIcon(res.weather[0].icon);
      setvisibility(res.visibility);
    }
  }
  useEffect(() => {
    getTemperatureStats();
  }, []);
  return (
    <div>
      <h2>Today's Weather</h2>
      <div className='section_div'>
      <div className='img-div'>
          <p>Weather Condition:</p>
          <p className='result'>{main}</p>
          <img src={`https://openweathermap.org/img/wn/${imgIcon}@2x.png`} alt="clouds"></img>
          <p className='result'>We are currently having {mainDescription}.</p>
        </div>
        <p>Location:</p>
        <p className='result'>{city} ,{country}</p>
        <div className='gridcontain'>
          
          <p>Current Temperature:</p>
          <p>Minimum Temperature:</p>
          <p>Maximum Temperature:</p>
          
          
          <p className='result'>{currTemp} </p>
          
          <p className='result'>{minTemp} </p>
          
          <p className='result'>{maxTemp} </p>
        </div>
        
        <div>
          <p>Pressure:</p>
          <p className='result'>{pressure} Hg</p>
          <p>Humidity:</p>
          <p className='result'>{humidity} %</p>
          <p>Wind:</p>
          <p className='result'>{windSpeed} KMPH</p>
        </div>
        
        <div>
          <p>Visibility:</p>
          <p className='result'>{visibility}</p>
        </div>
      </div>
    </div>
  );
}

export default App;