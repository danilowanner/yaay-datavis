var React = require('react');

var Weather = React.createClass({

	iconStyle: { marginTop: '0.25em' },
	textStyle: { marginTop: '-2.5em' },

	render: function(){
  	return (
  	  <div>
      	<div className="col col-1 col-height-1 col-white col-lg-offset-1">
      		<span className="center">{this.props.text}</span>
      	</div>
      	<div className="col col-1 col-height-1 col-mint">
      	  <div className={"icon-"+this.props.icon+" center"} style={this.iconStyle}></div>
      	  <span className="center" style={this.textStyle}>{this.props.temp}° C</span>
      	</div>
    	</div>
    )
	}

});

module.exports = Weather;
