import React, {useState} from 'react';
import Weather from './Components/weather';
import './App.css';

const API = {
  base: "http://api.openweathermap.org/data/2.5/",
  key: "6df449730eb38fbb068024c1b2c4e939"
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      temp: undefined,
      description: undefined,
      humidity: undefined,
      visibility: undefined,
      background: undefined,
      error: false
    };
    this.getWeather();
  }

  getWeather = async (e) => {

    e.preventDefault();

    const query = e.target.elements.query.value;

    if(query){
      const API_call = await fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`);
      const weather = await API_call.json();

      this.setState({
        city: weather.name,
        country: weather.sys.country,
        icon: weather.weather[0].icon,
        temp: weather.main.temp,
        description: weather.weather[0].description,
        humidity: weather.main.humidity,
        visibility: weather.visibility,
        background: weather.weather[0].main.toLowerCase()
      })
    } else {
      this.setState({error:true});
    }
  }

  render(){
    return(
      <div className="App">
      <main>
        <Weather
          city={this.state.city}
          country={this.state.country}
          icon={this.state.icon}
          temp={this.state.temp}
          description={this.state.description}
          humidity={this.state.humidity}
          visibility={this.state.visibility}
          background={this.state.background}
          loadweather={this.getWeather}
          error={this.state.error} 
          />        
      </main>
    </div>
    );
  }
}


export default App;
