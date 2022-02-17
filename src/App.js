import React, { useState } from 'react';
const api = {
  key: "fbf5dff1de8b21e41bf4be96563eb9bb",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`
  }

function toF() {
  let apple = Math.round(((Math.round(weather.main.temp)) * 9/5) +32);
  return apple;
}
// °
function toC() {
  const mapple = Math.round(weather.main.temp);
  return mapple;
}

function background() {
  return ((weather.weather[0].main === 'Clouds') ? 'app cloud' : (weather.weather[0].main === 'Clear') ? 'app clear' : 
  (weather.weather[0].main === 'Haze') ? 'app haze' : 'app');
}


function print(){
let f = toF();
let c = toC();
  if(document.addEventListener("click", function(){})){
    return f + '°F';
  }
  else {
    return c + '°C';
  }
}


  return (
    // <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
    <div className={(typeof weather.main != "undefined") ? background() : 'app'}>
      <main>
        <div className="search-box">
          <input 
            id='hello'
            type="text"
            className="search-bar"
            placeholder="Search Destination"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          
          <div className="weather-box">          
          
          <button id="one" className="temp" onClick={print()}>{print()}</button>
            <div className="weather">{weather.weather[0].main}</div>
            
            <div className="location">{print()}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;