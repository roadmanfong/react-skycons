'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Skycons = require('skycons')(window);

var ReactSkycons = function (_React$Component) {
  _inherits(ReactSkycons, _React$Component);

  function ReactSkycons(props) {
    _classCallCheck(this, ReactSkycons);

    var _this = _possibleConstructorReturn(this, (ReactSkycons.__proto__ || Object.getPrototypeOf(ReactSkycons)).call(this, props));

    _this.state = {
      skycons: new Skycons({ 'color': _this.props.color })
    };
    return _this;
  }

  _createClass(ReactSkycons, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var skycons = this.state.skycons;

      skycons.add(_reactDom2.default.findDOMNode(this), Skycons[this.props.icon]);

      if (this.props.autoplay) {
        skycons.play();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.state.skycons.set(_reactDom2.default.findDOMNode(this), Skycons[nextProps.icon]);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var skycons = this.state.skycons;

      skycons.pause();
      skycons.remove(_reactDom2.default.findDOMNode(this));
    }
  }, {
    key: 'play',
    value: function play() {
      this.state.skycons.play();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.state.skycons.pause();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          autoplay = _props.autoplay,
          icon = _props.icon,
          restPops = _objectWithoutProperties(_props, ['color', 'autoplay', 'icon']);

      var defaultStyle = {
        width: '100%',
        height: '100%'
      };

      return _react2.default.createElement('canvas', _extends({ style: defaultStyle }, restPops));
    }
  }]);

  return ReactSkycons;
}(_react2.default.Component);

ReactSkycons.propTypes = {
  color: _propTypes2.default.string,
  autoplay: _propTypes2.default.bool,
  icon: _propTypes2.default.oneOf(['CLEAR_DAY', 'CLEAR_NIGHT', 'PARTLY_CLOUDY_DAY', 'PARTLY_CLOUDY_NIGHT', 'CLOUDY', 'RAIN', 'SLEET', 'SNOW', 'WIND', 'FOG'])
};
ReactSkycons.defaultProps = {
  color: null,
  autoplay: true
};
exports.default = ReactSkycons;
