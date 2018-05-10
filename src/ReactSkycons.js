import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
const Skycons = require("skycons")(window);

export default class ReactSkycons extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    autoplay: PropTypes.bool,
    icon: PropTypes.oneOf([
      "CLEAR_DAY",
      "CLEAR_NIGHT",
      "PARTLY_CLOUDY_DAY",
      "PARTLY_CLOUDY_NIGHT",
      "CLOUDY",
      "RAIN",
      "SLEET",
      "SNOW",
      "WIND",
      "FOG",
      "clear-day",
      "clear-night",
      "partly-cloudy-day",
      "partly-cloudy-night",
      "cloudy",
      "rain",
      "sleet",
      "snow",
      "wind",
      "fog"
    ])
  };

  static defaultProps = {
    color: null,
    autoplay: true
  };

  constructor(props) {
    super(props);

    this.state = {
      skycons: new Skycons({ color: this.props.color })
    };
  }

  componentDidMount() {
    const { skycons } = this.state;
    skycons.add(
      ReactDOM.findDOMNode(this),
      Skycons[this.props.icon.toUpperCase().replace("-", "_")]
    );

    if (this.props.autoplay) {
      skycons.play();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.state.skycons.set(ReactDOM.findDOMNode(this), Skycons[nextProps.icon]);
  }

  componentWillUnmount() {
    const { skycons } = this.state;
    skycons.pause();
    skycons.remove(ReactDOM.findDOMNode(this));
  }

  play() {
    this.state.skycons.play();
  }

  pause() {
    this.state.skycons.pause();
  }

  render() {
    const {
      /* eslint-disable */
      // to remove unnecessary props
      color,
      autoplay,
      icon,
      /* eslint-enable */
      ...restPops
    } = this.props;

    const defaultStyle = {
      width: "100%",
      height: "100%"
    };

    return <canvas style={defaultStyle} {...restPops} />;
  }
}
