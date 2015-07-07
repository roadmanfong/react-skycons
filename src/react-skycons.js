import React from 'react';
const Skycons = require('skycons')(window);

const ReactSkycons = React.createClass({

  propTypes: {
    color: React.PropTypes.string,
    autoplay: React.PropTypes.bool,
    icon: React.PropTypes.oneOf([
      'CLEAR_DAY',
      'CLEAR_NIGHT',
      'PARTLY_CLOUDY_DAY',
      'PARTLY_CLOUDY_NIGHT',
      'CLOUDY',
      'RAIN',
      'SLEET',
      'SNOW',
      'WIND',
      'FOG'
    ])
  },

  getDefaultProps() {
    return {
      color: null,
      autoplay: true
    };
  },

  getInitialState() {
    return {
      skycons: new Skycons({'color': this.props.color})
    };
  },

  componentDidMount() {
    this.state.skycons.add(React.findDOMNode(this), Skycons[this.props.icon]);
    if(this.props.autoplay){
      this.state.skycons.play();
    }
  },

  componentWillReceiveProps(nextProps) {
   this.state.skycons.set(React.findDOMNode(this), Skycons[nextProps.icon]);
  },


  play() {
    this.state.skycons.play();
  },

  pause() {
    this.state.skycons.pause();
  },

  render() {
    let props = {};
    for(let prop in this.props){
      props[prop] = this.props[prop];
    }
    delete props.autoplay;
    return (
      <canvas {...props} />
    );
  }
});

export default ReactSkycons;
