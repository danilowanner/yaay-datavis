var React = require('react');
var io = require('socket.io-client');

var Weather = require('./Weather.react.js');
var Transport = require('./Transport.react.js');
var Watch = require('./Watch.react.js');
var Rhine = require('./Rhine.react.js');
var Air = require('./Air.react.js');
var Noise = require('./Noise.react.js');

var rowStyle = { fontSize: "1.25em" };
var appTime = new Date();
var baselToLocalTzOffset = 0;

function getStateFromSocket(data) {
  appTime = new Date(data.date);
  baselToLocalTzOffset = data.baselTzOffset + appTime.getTimezoneOffset();

  var transportDate = data.transport ? new Date(data.transport.departure) : undefined;

  return {
    weather: {
      temp: data.weather.temp,
      text: data.weather.yaayText,
      icon: data.weather.yaayIcon
    },
    transport: transportDate ? { minutes: getTransportInMin(transportDate), departure: transportDate } :
      { minutes: "–", departure: transportDate },
    watch: getBaselWatch(),
    rhine: { temp: data.rhine && data.rhine.temperature ? data.rhine.temperature : "–" },
    air: {
      co2: data.netatmo && data.netatmo.co2 ? data.netatmo.co2 : "–",
      text: data.netatmo.yaayCo2Text
    },
    noise: {
      level: data.netatmo && data.netatmo.noise ? data.netatmo.noise : "–",
      text: data.netatmo.yaayNoiseText
    }
  };
};

function getPlaceholderState() {
  return {
    weather: { temp: 0, text: "", icon: ""},
    transport: { time: 0 },
    watch: { hours: 0, minutes: 0, seconds: 0},
    rhine: { temp: 0 },
    air: { co2: 0, text: "" },
    noise: { level: 0, text: "" }
  }
};

function getBaselWatch() {
  var baselTime = new Date(appTime.getTime() + baselToLocalTzOffset*60*1000)
  return { hours: baselTime.getHours(), minutes: baselTime.getMinutes() }
}

function getTransportInMin(departure) {
  return Math.round((departure.getTime()-appTime.getTime())/60000);
}

var YaayDatavizApp = React.createClass({

  getInitialState: function() {
    return getPlaceholderState();
  },

  componentDidMount: function(){
    var self = this;
    var socket = io('http://realtime.yaayapp.ch:80');

    socket.on('change', function (data) {
      self.setState(getStateFromSocket(data));
    });

    // Start internal timer
    this._timer = setInterval(this._tick, 1000);
  },

  componentWillUnmount: function(){
    clearInterval(this._timer);
  },

  render: function() {
  	return (
  	  <section>
        <div className="row" style={rowStyle}>
          <Weather text={this.state.weather.text} icon={this.state.weather.icon} temp={this.state.weather.temp} />
          <Transport minutes={this.state.transport.minutes} />
        </div>
        <div className="row" style={rowStyle}>
          <Watch hours={this.state.watch.hours} minutes={this.state.watch.minutes} />
          <Rhine temp={this.state.rhine.temp}  />
        </div>
        <div className="row" style={rowStyle}>
          <Air co2={this.state.air.co2} text={this.state.air.text} />
          <Noise level={this.state.noise.level} text={this.state.noise.text} />
        </div>
      </section>
  	);
  },

  _tick: function() {
    // Calculate time elapsed since last tick
    var now = new Date(),
        diff = this._lastTick ? now.getTime() - this._lastTick.getTime() : 1000;

    // Update appTime object to represent the extrapolated new server time
    appTime = new Date(appTime.getTime() + diff);
    this._lastTick = now;

    // Update watch and transport state
    this.setState({
      watch: getBaselWatch(),
      transport: { minutes: this.state.transport.departure ? getTransportInMin( this.state.transport.departure ) : "–", departure: this.state.transport.departure }
    });
  }

});

module.exports = YaayDatavizApp;
