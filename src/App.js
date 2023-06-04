import React,{useState} from 'react';
import './App.css';
  
const api = {
    key:`e15abbf83e320d4516fd450b74f69d67`,
    base:"https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search,setSearch] =useState("")
  const [weather , setWeather] =useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=matric&APPID=${api.key}`)
    .then(res => res.json())
     .then((result) => {
      setWeather(result);
      setSearch('');
    console.log(result);
      })
  }
  return (
    <div className="App">
       <h1>Weather App</h1>
       <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="enter city name..." />
       <button onClick={searchPressed} >Search</button>
         {
          weather.main && (
            <div className='main-text'>
               
              <p>🌇 City : {weather.name}</p>
              <p>🔥 Temp : {Math.round(weather.main.temp)}</p>
              <p>🌧 Humidity : {weather.main.humidity}%</p>
              <p>🌨 Description : {weather.weather[0].description}</p>
            </div>
          )
         }
    </div>
  );
}

export default App;
