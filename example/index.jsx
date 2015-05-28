import React from 'react';

import Skycons from '../dist/react-skycons';
import request from 'superagent';

var weatherMap = {
  Clouds: 'CLOUDY',
  Thunderstorm: 'rain',
  Drizzle:'',
  Rain: '',
  Snow: '',
  Atmosphere: '',
  Extreme: '',
  Additional: ''
};

var dayMap = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

var Usage = React.createClass({

  propTypes: {
    value: React.PropTypes.string,
    children: React.PropTypes.node
  },

  getDefaultProps() {
    return {
      value: ''
    };
  },

  _select(event) {
    event.currentTarget.select();
  },

  render() {
    return (
      <div className='icon-usage'>
        {this.props.children}
        <br/>
        <input
          onClick={this._select}
          type='text'
          value={this.props.value}
          readonly />
      </div>
    );
  }
});

var Demo = React.createClass({

  getInitialState: function() {
    return {
      name: null,
      temperature: null,
      weather: null
    };
  },

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var {latitude, longitude} = position.coords;
      this._fetchWeather(latitude, longitude);
    }, () => {
      this._fetchWeather(25.03, 121.30);
    });

  },

  _fetchWeather(latitude, longitude){
    request
      .get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}`)
      .end((err, res) => {
        if(err){
          console.log(err);
        } else {

          this.setState({
            day: dayMap[(new Date()).getDay()],
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
    return parseInt( (temp - 273.15) * 10 ) / 10 +  '°C';
  },

  render() {
    return (
      <div className='wrapper'>
        <h1>Demo</h1>
        <div className='icon-demo'>
          <h1>{this.state.day}</h1>
          <Skycons color='white' icon={this.state.icon} />
          <br />
          <h1 className='temperature' >{this.state.celsius}</h1>
          <label className='description' >{this.state.description}</label>
          <hr/>
          <h1 className='cityname'>{this.state.name}</h1>
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

React.render(<Demo />, document.getElementById('main'));
