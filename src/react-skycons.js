import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
const Skycons = require('skycons')(window);

class ReactSkycons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skycons: new Skycons({'color': this.props.color})
    };
  }

  componentDidMount() {
    this.state.skycons.add(ReactDOM.findDOMNode(this), Skycons[this.props.icon]);

    if (this.props.autoplay) {
      this.state.skycons.play();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.state.skycons.set(ReactDOM.findDOMNode(this), Skycons[nextProps.icon]);
  }

  componentWillUnmount() {
    this.state.skycons.pause();
    this.state.skycons.remove(ReactDOM.findDOMNode(this));
  }

  play() {
    this.state.skycons.play();
  }

  pause() {
    this.state.skycons.pause();
  }

  render() {
    let props = {};

    for (let prop in this.props) {
      props[prop] = this.props[prop];
    }

    delete props.autoplay;

    return (
      <canvas {...props} />
    );
  }
}

ReactSkycons.defaultProps = {
  color: null,
  autoplay: true
};

ReactSkycons.propTypes = {
  color: PropTypes.string,
  autoplay: PropTypes.bool,
  icon: PropTypes.oneOf([
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
};

export default ReactSkycons;
