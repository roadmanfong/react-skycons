/* eslint-disable quotes */

import React from 'react';
import { render } from 'react-dom';
import request from 'superagent';

import Skycons from '../dist/react-skycons';
import Usage from './usage';

const APPID = '095aa626833cf3dcc7df430c0f99b538';
const DAY_MAP = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];


const Demo = React.createClass({

  getInitialState() {
    return {
      name: null,
      temperature: null,
      weather: null
    };
  },

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      let {latitude, longitude} = position.coords;
      this._fetchWeather(latitude, longitude);
    }, () => {
      this._fetchWeather(25.03, 121.30);
    });

  },

  _fetchWeather(latitude, longitude){
    request
      .get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${APPID}`)
      .end((err, res) => {
        if(err){
          console.log(err);
        } else {

          this.setState({
            day: DAY_MAP[(new Date()).getDay()],
            celsius: this._toCelsius(res.body.main.temp),
            icon: this._getIcon(res.body.weather[0].id),
            description: res.body.weather[0].description,
            name: res.body.name
          });
          console.log(res);
        }
      });
  },

  _getIcon(id) {
    if(id >= 200 && id < 300){
      return 'RAIN';
    } else if (id >= 300 && id < 500){
      return 'SLEET';
    } else if (id >= 500 && id < 600){
      return 'RAIN';
    } else if (id >= 600 && id < 700){
      return 'SNOW';
    } else if (id >= 700 && id < 800){
      return 'FOG';
    } else if (id === 800){
      return 'CLEAR_DAY';
    } else if (id >= 801 && id < 803){
      return 'PARTLY_CLOUDY_DAY';
    } else if (id >= 802 && id < 900){
      return 'CLOUDY';
    } else if (id === 905 || (id >= 951 && id <= 956)){
      return 'WIND';
    } else if (id >= 900 && id < 1000){
      return 'RAIN';
    }
  },

  _toCelsius(temp) {
    return parseInt( (temp - 273.15) * 10 ) / 10 + '°C';
  },

  render() {
    let {
      icon,
      celsius,
      description,
      name
    } = this.state;
    return (
      <div className='wrapper'>
        <h1>Demo</h1>
        <div className='icon-demo'>
          <h1>{this.state.day}</h1>
          <Skycons color='white' icon={icon} />
          <br />
          <h1 className='temperature' >{celsius}</h1>
          <label className='description' >{description}</label>
          <hr/>
          <h1 className='cityname'>{name}</h1>
        </div>

        <br />
        <h1>Icons</h1>
        <Usage value={`<Skycons color='white' icon='CLEAR_DAY' />`}>
          <Skycons color='white' icon='CLEAR_DAY' />
        </Usage>


        <Usage value={`<Skycons color='white' icon='CLEAR_NIGHT' />`} >
          <Skycons color='white' icon='CLEAR_NIGHT' />
        </Usage>

        <Usage value={`<Skycons color='white' icon='PARTLY_CLOUDY_DAY' />`} >
          <Skycons color='white' icon='PARTLY_CLOUDY_DAY' />
        </Usage>

        <Usage value={`<Skycons color='white' icon='PARTLY_CLOUDY_NIGHT' />`} >
          <Skycons color='white' icon='PARTLY_CLOUDY_NIGHT' />
        </Usage>

        <Usage value={`<Skycons color='white' icon='CLOUDY' />`} >
          <Skycons color='white' icon='CLOUDY' />
        </Usage>

        <Usage value={`<Skycons color='white' icon='RAIN' />`} >
          <Skycons color='white' icon='RAIN' />
        </Usage>

        <Usage value={`<Skycons color='white' icon='SLEET' />`} >
          <Skycons color='white' icon='SLEET' />
        </Usage>

        <Usage value={`<Skycons color='white' icon='SNOW' />`} >
          <Skycons color='white' icon='SNOW' />
        </Usage>

        <Usage value={`<Skycons color='white' icon='WIND' />`} >
          <Skycons color='white' icon='WIND' />
        </Usage>

        <Usage value={`<Skycons color='white' icon='FOG' />`} >
          <Skycons color='white' icon='FOG' />
        </Usage>

        <br />
        <h1>autoplay</h1>
        <Usage value={`<Skycons color='white' icon='PARTLY_CLOUDY_DAY' autoplay={false}/>`} >
          <Skycons color='white' icon='PARTLY_CLOUDY_DAY' autoplay={false}/>
        </Usage>

        <br />
        <h1>color</h1>
        <Usage value={`<Skycons color='yellow' icon='CLEAR_DAY' />`} >
          <Skycons color='yellow' icon='CLEAR_DAY'/>
        </Usage>

        <Usage value={`<Skycons color='cyan' icon='CLEAR_DAY' />`} >
          <Skycons color='cyan' icon='CLEAR_DAY'/>
        </Usage>
      </div>
    );
  }

});

render(
  <Demo />,
  document.getElementById('main')
);
