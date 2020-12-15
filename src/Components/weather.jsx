import React from "react";
import Input from './input';

const Weather = (props) => {
    return(
        <div id="background" className={props.background}>
            <div id="wrapper">
              <div className="container container-fluid">
                <div className="cols search">
                  <div className="col">
                      <Input loadweather={this.getWeather} error={this.state.error} />
                  </div>
                </div>
                  <div className="wrap">
                    <div className="cols">
                      <div className="col help">
                        <p>Example - London, GB</p>
                      </div>
                    </div>
                    <div className="cols location">
                      <div className="col">
                        <h2 className="currentlocation">{props.city}, {props.country}</h2>
                        <span className="date">Friday 11 November 2020</span>
                      </div>
                    </div>
                    <div className="cols weather">
                      <div className="col icons">
                        <img alt="weather icon" className="icon" src={`http://openweathermap.org/img/wn/`+props.icon+`@2x.png`}/>
                      </div>
                      <div className="col detail">
                        <h3 className="temp">{Math.round(props.temp)}°C</h3>
                      </div>
                    </div>
                    <div className="cols desc">
                      <div className="col">
                        <h4 className="weathernow">{props.description}</h4>
                      </div>
                    </div>
                    <div className="cols extra">
                      <div className="col">
                        <span>Humidity: {props.humidity}%</span>
                      </div>
                      <div className="col">
                        <span>Visibility: {Math.round(props.visibility/1000)}km</span>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
    )
}

export default Weather;