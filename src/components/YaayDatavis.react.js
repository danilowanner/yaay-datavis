var React = require('react');

var Weather = require('./Weather.react');
var Transport = require('./Transport.react');
var Watch = require('./Watch.react');
var Rhine = require('./Rhine.react');
var Air = require('./Air.react');
var Noise = require('./Noise.react');

var rowStyle = { fontSize: "1.25em" };

var YaayDatavis = React.createClass({

  render: function() {
  	return (
  	  <section>
        <div className="row" style={rowStyle}>
          <Weather text={this.props.data.weather.text} icon={this.props.data.weather.icon} temp={this.props.data.weather.temp} />
          <Transport minutes={this.props.data.transport.minutes} />
        </div>
        <div className="row" style={rowStyle}>
          <Watch hours={this.props.data.watch.hours} minutes={this.props.data.watch.minutes} />
          <Rhine temp={this.props.data.rhine.temp}  />
        </div>
        <div className="row" style={rowStyle}>
          <Air co2={this.props.data.air.co2} text={this.props.data.air.text} />
          <Noise level={this.props.data.noise.level} text={this.props.data.noise.text} />
        </div>
      </section>
  	);
  },

});

module.exports = YaayDatavis;
